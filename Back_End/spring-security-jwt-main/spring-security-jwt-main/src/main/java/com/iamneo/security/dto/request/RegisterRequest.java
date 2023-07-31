package com.iamneo.security.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	private String email;
	private String firstName;
	private String lastName;
	private String address;
	private Long phone;
    private String password;
    private String gender;
    private int age;;
    private String state;
}
