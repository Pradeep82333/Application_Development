package com.travelplanner.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.travelplanner.model.User;
import com.travelplanner.util.DBHandler;

public class UserDaoImpl implements UserDao{
	@Override
    public void createUser(User user) {
        PreparedStatement ps = null;
        Connection conn = null;
        try {
            conn = DBHandler.getConnection();
            String query = "INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)";
            ps = conn.prepareStatement(query);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getEmail());
            ps.setString(3, user.getPassword());
            ps.setLong(4, user.getPhone());
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
    public User getUserByEmail(String email) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection conn = null;
        User user = null;
        try {
            conn = DBHandler.getConnection();
            String query = "SELECT * FROM users WHERE email=?";
            ps = conn.prepareStatement(query);
            ps.setString(1, email);
            rs = ps.executeQuery();
            if (rs.next()) {
                user = new User();
                user.setUserid(rs.getInt("userid"));
                user.setUsername(rs.getString("username"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                user.setPhone(rs.getLong("phone"));
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
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection conn = null;
        List<User> userList = new ArrayList<>();
        try {
            conn = DBHandler.getConnection();
            String query = "SELECT * FROM users";
            ps = conn.prepareStatement(query);
            rs = ps.executeQuery();
            while (rs.next()) {
                User user = new User();
                user.setUserid(rs.getInt("userid"));
                user.setUsername(rs.getString("username"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                user.setPhone(rs.getLong("phone"));
                userList.add(user);
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
        return userList;
    }

    @Override
    public void updateUser(User user) {
        PreparedStatement ps = null;
        Connection conn = null;
        try {
            conn = DBHandler.getConnection();
            String query = "UPDATE users SET username=?, email=?, password=?, phone=? WHERE userid=?";
            ps = conn.prepareStatement(query);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getEmail());
            ps.setString(3, user.getPassword());
            ps.setLong(4, user.getPhone());
            ps.setInt(5, user.getUserid());
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
    public void deleteUser(int userId) {
        PreparedStatement ps = null;
        Connection conn = null;
        try {
            conn = DBHandler.getConnection();
            String query = "DELETE FROM users WHERE userid=?";
            ps = conn.prepareStatement(query);
            ps.setInt(1, userId);
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
