# Test-OnlineCheckin-Manual-Testing
Test scenarios: 

1. Verify if the booking details is retrieved by entering booking reference and the last name of the reservation
2. Verify the check-in is done when booking reference and the last name of the reservation are given correctly
3. Verify if the details for accessing the properties is available only for the guest who is checked in already
4. Verify if the details for accessing the properties is not available only for the guest who is checked in already
5. Verify taking the picture option is available for the mandatory passport field for non-German nationality
6. Verify Uploading the picture option is available for the mandatory passport field for non-German nationality
7. Verify Passport field is mandatory and expect an indication or an error for non-German nationality
8. Verify we can open the app in android mobile without any issue
9. Verify we can open the app in IOS mobile without any issue
10. Verify we can open the app in Microsoft mobile without any issue
11. Verify the language change from English to German is successfully happening
12. Verify the language change from German to English is successfully happening
13. Verify check-in fails when booking reference and the last name of the reservation are not given correctly
14. Verify check-in fails when booking reference is given correctly and the last name of the reservation is not given correctly
15. Verify check-in fails when last name of the reservation is given correctly, and the booking reference is not given correctly
16. Verify Passport field is not mandatory for the guests with German nationality
17. Verify the booking reference field should give an error for the special characters input
18. Verify the last name reference field should give an error for the special characters/numbers input

Defects found in the Website link given:   
https://limehome-qa-task.herokuapp.com

Defects in page 1 - 

1.	Language change from English to German is not happening
2.	Booking reference is taking special characters as input - Expected is, it should take only alphabets and numericals
3.	Booking reference is taking more than 10 characters as input – Expected is it should take only 10 characters

Defects in page 2 – 

1.	The text paragraphs are shown in some other language even if  EN option is selected 
2.	All the sections like PERSONAL DETAILS, PASSPORT, TRIP, CUSTOMER SUPPORT, THANK YOU have the same text paragraphs
3.	The page does not consider the language change from EN to DE , half of the data will be in English and half will be in German
4.	When we enter the page 2 , without filling or clicking on the fields or by giving incorrect data to any field, click on Submit – error shows but there is no field highlighted
5.	Passport id field is taking the special characters – it should allow only alphabets and numericals


Defect Reporting:

Bug 1: 
Description: Booking reference is taking special characters as input 

Steps to reproduce: 
1. Open the link
2. Go to retrieve your booking section
3. Click on booking reference field

Actual result: Booking reference is taking special characters as input
Expected result: Booking reference should take only alphabets and numericals 
Test device: Laptop – Google Chrome, Fireforx
Test occurrence time: 14 Jan 2020, 18:30
Video to depict the scenario: Attach screenshot to explain the bug




