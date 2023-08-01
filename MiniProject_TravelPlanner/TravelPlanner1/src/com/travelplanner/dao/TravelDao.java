package com.travelplanner.dao;

import java.util.List;

import com.travelplanner.model.Travel;
//Abstraction
public interface TravelDao {
	public void createTrip(Travel trip);
    public Travel getTripById(int tripId);
    public List<Travel> getTripsByUserId(int userId);
    public void updateTrip(Travel trip);
    public void deleteTrip(int tripId);
}
