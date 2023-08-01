package com.travelplanner.main;

import java.util.List;
import java.util.Scanner;

import com.travelplanner.dao.TravelDao;
import com.travelplanner.dao.TravelDaoImpl;
import com.travelplanner.dao.UserDaoImpl;
import com.travelplanner.model.Travel;
import com.travelplanner.model.User;

public class TravelPlannerMain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        UserDaoImpl userDao = new UserDaoImpl();
        TravelDao travelDao = new TravelDaoImpl();

        boolean loggedIn = false;
        User loggedInUser = null;

        while (true) {
            System.out.println("===== Travel Planner Application =====");
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    System.out.println("===== Register User =====");
                    System.out.print("Enter username: ");
                    String username = scanner.nextLine();
                    System.out.print("Enter email: ");
                    String email = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String password = scanner.nextLine();
                    System.out.print("Enter phone number: ");
                    Long phone = scanner.nextLong();
                    scanner.nextLine(); // Consume the newline character

                    User newUser = new User(0, username, email, password, phone);
                    userDao.createUser(newUser);
                    System.out.println("User registered successfully!");
                    break;

                case 2:
                    if (loggedIn) {
                        System.out.println("You are already logged in.");
                        break;
                    }

                    System.out.println("===== Login =====");
                    System.out.print("Enter email: ");
                    String loginEmail = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String loginPassword = scanner.nextLine();

                    User user = userDao.getUserByEmail(loginEmail);

                    if (user != null && user.getPassword().equals(loginPassword)) {
                        loggedIn = true;
                        loggedInUser = user;
                        System.out.println("Login successful!");
                    } else {
                        System.out.println("Invalid email or password. Please try again.");
                    }
                    break;

                case 3:
                    System.out.println("BYE BYE! Exiting the application........ ");
                    scanner.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice. Please enter a valid option.");
            }

            // Additional functionality based on the loggedIn status.
            if (loggedIn) {
                travelMenu(scanner, travelDao, loggedInUser);
            }
        }
    }

    private static void travelMenu(Scanner scanner, TravelDao travelDao, User loggedInUser) {
        while (true) {
            System.out.println("\n===== Travel Menu =====");
            System.out.println("1. Add Travel Plan");
            System.out.println("2. View My Travel Plans");
            System.out.println("3. Update Travel Plan");
            System.out.println("4. Delete Travel Plan");
            System.out.println("5. Logout");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    System.out.println("===== Add Travel Plan =====");
                    System.out.print("Enter destination: ");
                    String destination = scanner.nextLine();
                    System.out.print("Enter type of transport: ");
                    String transport = scanner.nextLine();
                    System.out.print("Enter accommodation: ");
                    String accommodation = scanner.nextLine();
                    System.out.print("Enter date and time: ");
                    String dateAndTime = scanner.nextLine();

                    Travel newTravel = new Travel(0, loggedInUser.getUserid(), destination, transport, accommodation, dateAndTime);
                    travelDao.createTrip(newTravel);
                    System.out.println("Travel plan added successfully!");
                    break;

                case 2:
                    System.out.println("===== My Travel Plans =====");
                    List<Travel> userTrips = travelDao.getTripsByUserId(loggedInUser.getUserid());
                    for (Travel trip : userTrips) {
                        System.out.println(trip);
                    }
                    break;

                case 3:
                    System.out.println("===== Update Travel Plan =====");
                    System.out.print("Enter trip ID to update: ");
                    int tripIdToUpdate = scanner.nextInt();
                    scanner.nextLine(); // Consume the newline character

                    Travel travelToUpdate = travelDao.getTripById(tripIdToUpdate);

                    if (travelToUpdate != null && travelToUpdate.getUserid() == loggedInUser.getUserid()) {
                        System.out.print("Enter updated destination: ");
                        travelToUpdate.setDestination(scanner.nextLine());
                        System.out.print("Enter updated type of transport: ");
                        travelToUpdate.setTypeoftransport(scanner.nextLine());
                        System.out.print("Enter updated accommodation: ");
                        travelToUpdate.setAccommodation(scanner.nextLine());
                        System.out.print("Enter updated date and time: ");
                        travelToUpdate.setDateandtime(scanner.nextLine());

                        travelDao.updateTrip(travelToUpdate);
                        System.out.println("Travel plan updated successfully!");
                    } else {
                        System.out.println("Invalid trip ID or you do not have permission to update this trip.");
                    }
                    break;

                case 4:
                    System.out.println("===== Delete Travel Plan =====");
                    System.out.print("Enter trip ID to delete: ");
                    int tripIdToDelete = scanner.nextInt();
                    scanner.nextLine(); // Consume the newline character

                    Travel travelToDelete = travelDao.getTripById(tripIdToDelete);

                    if (travelToDelete != null && travelToDelete.getUserid() == loggedInUser.getUserid()) {
                        travelDao.deleteTrip(tripIdToDelete);
                        System.out.println("Travel plan deleted successfully!");
                    } else {
                        System.out.println("Invalid trip ID or you do not have permission to delete this trip.");
                    }
                    break;

                case 5:
                    System.out.println("Logging out...");
                    return;

                default:
                    System.out.println("Invalid choice. Please enter a valid option.");
            }
        }
    }
}
