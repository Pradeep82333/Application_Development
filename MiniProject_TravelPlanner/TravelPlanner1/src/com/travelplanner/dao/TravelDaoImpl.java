package com.travelplanner.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.travelplanner.model.Travel;
import com.travelplanner.util.DBHandler;

public class TravelDaoImpl implements TravelDao {
    @Override
    public void createTrip(Travel trip) {
        PreparedStatement ps = null;
        Connection conn = null;
        try {
            conn = DBHandler.getConnection();
            String query = "INSERT INTO travel (userid, destination, typeoftransport, accommodation, dateandtime) VALUES (?, ?, ?, ?, ?)";
            ps = conn.prepareStatement(query);
            ps.setInt(1, trip.getUserid());
            ps.setString(2, trip.getDestination());
            ps.setString(3, trip.getTypeoftransport());
            ps.setString(4, trip.getAccommodation());
            ps.setString(5, trip.getDateandtime());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    @Override
    public Travel getTripById(int tripId) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection conn = null;
        Travel trip = null;
        try {
            conn = DBHandler.getConnection();
            String query = "SELECT * FROM travel WHERE tripid=?";
            ps = conn.prepareStatement(query);
            ps.setInt(1, tripId);
            rs = ps.executeQuery();
            if (rs.next()) {
                trip = new Travel();
                trip.setTripid(rs.getInt("tripid"));
                trip.setUserid(rs.getInt("userid"));
                trip.setDestination(rs.getString("destination"));
                trip.setTypeoftransport(rs.getString("typeoftransport"));
                trip.setAccommodation(rs.getString("accommodation"));
                trip.setDateandtime(rs.getString("dateandtime"));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                if (rs != null)
                    rs.close();
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
        return trip;
    }

    @Override
    public List<Travel> getTripsByUserId(int userId) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection conn = null;
        List<Travel> tripList = new ArrayList<>();
        try {
            conn = DBHandler.getConnection();
            String query = "SELECT * FROM travel WHERE userid=?";
            ps = conn.prepareStatement(query);
            ps.setInt(1, userId);
            rs = ps.executeQuery();
            while (rs.next()) {
                Travel trip = new Travel();
                trip.setTripid(rs.getInt("tripid"));
                trip.setUserid(rs.getInt("userid"));
                trip.setDestination(rs.getString("destination"));
                trip.setTypeoftransport(rs.getString("typeoftransport"));
                trip.setAccommodation(rs.getString("accommodation"));
                trip.setDateandtime(rs.getString("dateandtime"));
                tripList.add(trip);
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                if (rs != null)
                    rs.close();
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
        return tripList;
    }

    @Override
    public void updateTrip(Travel trip) {
        PreparedStatement ps = null;
        Connection conn = null;
        try {
            conn = DBHandler.getConnection();
            String query = "UPDATE travel SET destination=?, typeoftransport=?, accommodation=?, dateandtime=? WHERE tripid=?";
            ps = conn.prepareStatement(query);
            ps.setString(1, trip.getDestination());
            ps.setString(2, trip.getTypeoftransport());
            ps.setString(3, trip.getAccommodation());
            ps.setString(4, trip.getDateandtime());
            ps.setInt(5, trip.getTripid());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
    }

    @Override
    public void deleteTrip(int tripId) {
        PreparedStatement ps = null;
        Connection conn = null;
        try {
            conn = DBHandler.getConnection();
            String query = "DELETE FROM travel WHERE tripid=?";
            ps = conn.prepareStatement(query);
            ps.setInt(1, tripId);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                if (ps != null)
                    ps.close();
                if (conn != null)
                    conn.close();
            } catch (SQLException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
