package com.travelplanner.model;

public class Travel {
	private int tripid;
	private int userid;
	private String destination;
	private String typeoftransport;
	private String accommodation;
	private String dateandtime;
	public int getTripid() {
		return tripid;
	}
	//Encapsulation
	public void setTripid(int tripid) {
		this.tripid = tripid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getTypeoftransport() {
		return typeoftransport;
	}
	public void setTypeoftransport(String typeoftransport) {
		this.typeoftransport = typeoftransport;
	}
	public String getAccommodation() {
		return accommodation;
	}
	public void setAccommodation(String accommodation) {
		this.accommodation = accommodation;
	}
	public String getDateandtime() {
		return dateandtime;
	}
	public void setDateandtime(String dateandtime) {
		this.dateandtime = dateandtime;
	}
	//Method Overriding Polymorphism
	@Override
	public String toString() {
		return "Travel [tripid=" + tripid + ", userid=" + userid + ", destination=" + destination + ", typeoftransport="
				+ typeoftransport + ", accommodation=" + accommodation + ", dateandtime=" + dateandtime + "]";
	}
	public Travel(int tripid,int userid,String destination,String typeoftransport,String accommodation,String dateandtime) {
		super();
		// TODO Auto-generated constructor stub
		this.tripid=tripid;
		this.userid=userid;
		this.destination=destination;
		this.typeoftransport=typeoftransport;
		this.accommodation=accommodation;
		this.dateandtime=dateandtime;
	}
	public Travel() {
		// TODO Auto-generated constructor stub
	}
	
}
