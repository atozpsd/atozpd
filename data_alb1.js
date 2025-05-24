// Sample JSON data for products
const productsData = [
    {
        "id": 1,
        "name": "1st Birthday Album Pack",
        "description": "A classic 1st Birthday Album Pack for photography lovers.",
        "image": "https://images.unsplash.com/photo-1734102505163-5050877fbf47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "related": [2, 3]
    },
    {
        "id": 2,
        "name": "1st Birthday Album Pack",
        "description": "Stylish 1st Birthday Album Pack with leather strap.",
        "image": "https://lh3.googleusercontent.com/d/1vnZAutOsFEEw2_JNtGJFzZpIy1pTfS6G",
        "related": [1, 4, 5, 3]
    },
    {
        "id": 3,
        "name": "Classic Bicycle",
        "description": "A classic bicycle for everyday city rides.",
        "image": "https://lh3.googleusercontent.com/d/1GoJj-dnghzerE71HWB8xEDLVV3xGBcUx",
        "related": [1, 5]
    },
    {
        "id": 4,
        "name": "1st Birthday Album Pack",
        "description": "Premium 1st Birthday Album Pack for all your travel needs.",
        "image": "https://lh3.googleusercontent.com/d/19eNuKaB-UwuMKrG8yflL86WvTYIKmyk3",
        "related": [2, 5]
    },
    {
        "id": 5,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1fgPnGfDyUU-k0D934kDtkTexWsphzHsU",
        "related": [3, 4]
    }
    ,
    {
        "id": 6,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1NBpkbn8vN9Fi_Bf-2i53dFgGExqIpRo0",
        "related": [3, 4]
    },
    {
        "id": 7,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1rpvWF71yMRwHTT16_ZKXDOpW8JWznYis",
        "related": [3, 4]
    },    
    {
        "id": 8,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1WjeMqNNf-oJ2z9T7zn0QeW4CMfcUXnwz",
        "related": [3, 4]
    },
    {
        "id": 9,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1rsrj7_HpuqN3zqZ-beYQh2y1U5X31yvw",
        "related": [3, 4]
    },
    {
        "id": 10,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1mSKhU-2M1ifLRAEKnPkymPNthVyWmHn6",
        "related": [3, 4]
    },
    {
        "id": 11,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1VuhiNVVqUSca6W-_gCxu0-sx6UbWY4h5",
        "related": [3, 4]
    },
    {
        "id": 12,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/15tDTzGCxkdLtNWqEqjMuBp8tkqOXQ_Z1",
        "related": [3, 4]
    },
    {
        "id": 13,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1uHxAouXzhgyQXlH4MDL3_eLwP68PJUvk",
        "related": [3, 4]
    },
    {
        "id": 14,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/17vw1jZYJ5R-S6TYhoUS0LBCXy1QZeaL6",
        "related": [3, 4]
    },
    {
        "id": 15,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1BA_yXMRTFuD_cpQsKbY-LXv5CNy3X81I",
        "related": [3, 4]
    },
    {
        "id": 16,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1Z3ZdJTiJUiTv45Cti-0bNM_6HhI73dB-",
        "related": [3, 4]
    },
    {
        "id": 17,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1veyOVdp2zI2i3qjpSp73RsDH91WRBlk-",
        "related": [3, 4]
    },
    {
        "id": 18,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1Qa3TCxJxamSx2_FsfOBbJTm03r54ymix",
        "related": [3, 4]
    },
    {
        "id": 19,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1mMR4uB1q7RDVfJfVjyAgXAw9zP_7VNNL",
        "related": [3, 4]
    },
    {
        "id": 20,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1mMR4uB1q7RDVfJfVjyAgXAw9zP_7VNNL",
        "related": [3, 4]
    },
    {
        "id": 21,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1qBWT7A_iOx5U3pTksB1Iq55x6MinRdxB",
        "related": [3, 4]
    },
    {
        "id": 22,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1GNwUa2763KWjQuFR98FD5d1BoGwuDRj7",
        "related": [3, 4]
    },
    {
        "id": 23,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1WhlvFTVcAEFG6aea91ZK-5jHC7QeFXTB",
        "related": [3, 4]
    },
    {
        "id": 24,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1GNwUa2763KWjQuFR98FD5d1BoGwuDRj7",
        "related": [3, 4]
    },
    {
        "id": 25,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1Gia0QDH5njBqLSy2mpqmcewVkoDrHNub",
        "related": [3, 4]
    },
    {
        "id": 26,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1Bs0bZDbd-Dqf4GLDQgGnmRzZZi7Iw-UV",
        "related": [3, 4]
    },
    {
        "id": 27,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1D-aWqvUbDo_C7y6nB_2zK-NyNzznM_-s",
        "related": [3, 4]
    },
    {
        "id": 28,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1WcvBF6kHCVjuBzI5e_zYe-1ttcK0P4TP",
        "related": [3, 4]
    },
    {
        "id": 29,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1EIcL6rC8QshhYnjqEuzIHKP6OjEMGn00",
        "related": [3, 4]
    },
    {
        "id": 30,
        "name": "1st Birthday Album Pack",
        "description": "High quality 1st Birthday Album Pack with noise cancellation.",
        "image": "https://lh3.googleusercontent.com/d/1IADIxesCSTJfTehtkcmcDfDMvdwq3elZ",
        "related": [3, 4]
    }
];