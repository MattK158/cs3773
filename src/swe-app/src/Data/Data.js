import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilSignOutAlt,
    UilMoneyWithdrawal,
    UilUsdSquare,
    UilUserCircle,
} from "@iconscout/react-unicons";

// WHAT DOES BAR VALUE REPRESENT? - current value compared to the max value of the past 7 days.

// TODO: need to fetch last 7 days worth of data from database, and then take the max value from that data and divide it by today's values
function barValueCalculation(params) {
    
}

// TODO: need to fetch data from database, and then sum up all the values from customer orders
function salesCalculation(params) {
    
}

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilSignOutAlt,
        heading: "Logout",
    }
];

// Cards data
// TODO: need to make this dynamic based on data pulled from database
export const CardsData = [

    // sales can be calculatd by summing up the total of all customer orders
    {
        title: "Sales",
        color: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px #e0c6f5",
        },
        // TODO: bar value calculation function can go to the barValue
        barValue: 70,
        // TODO: sales calculation function can go to the value
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                // TODO: each index of data can represent one customer order total
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },

    // revenue can be calculated by summing up the total of all orders + some number, which will be fixed
    {
        title: "Revenue",
        color: {
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px #FDC0C7",
        },
        barValue: 80,
        // TODO: sales function + 1200 can go to the value
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                // TODO: each index can represent one customer order and add 1200 to it
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },

    // expenses are business purchases, can be calculated by summing up the total of all purchases
    {
        title: "Expenses",
        color: {
            background: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
            boxShadow: "0px 4px 20px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];

// Bulletin Board Data
// time variable needs to be calculated based on current time and time of post pulled from database
export const BulletinData = [
    {
        png: UilUserCircle,
        name: "John Doe",
        noti: "Maintenance to Aisle 9 for a code 55",
        time: "25 seconds ago"
    },

    {
        png: UilUserCircle,
        name: "James Bond",
        noti: "Receiving has a truck in the loading dock",
        time: "3 days ago"
    },

    {
        png: UilUserCircle,
        name: "Tony Stark",
        noti: "Team Lead Meeting at 3pm today",
        time: "1 week ago"
    },
];