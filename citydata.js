// (GET)  http://localhost:5000/api/location

db.city.insertMany([
    {
        "_id":1,
	    "city_name":"Delhi",
        "city":1,
        "area":11,
        "country_name" :"India",
    },
    
    {
        "_id": 2,
        "name": "Borivali West",
        "city": 2,
        "area":21,
        "country_name":"India",
    },
    
    {
        "_id": 3,       
        "city_name":"Pune",
        "city": 3,
        "area":31,
        "country_name":"India",
    },
    
    {
        "_id": 4,
        "city_name":"Bangalore",
        "city": 4,
        "area":41,
        "country_name":"India",
    },
    {
        "_id": 5,
        "name": "Sector70, Chandigarh",
	    "city_name":"Chandigarh",
        "city": 5,
        "area":51,
        "country_name": "India",
    }
])
