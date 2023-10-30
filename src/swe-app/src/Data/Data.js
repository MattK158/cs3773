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
export const CardsData = [
    {
        title: "Sales",
        color: {
            background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },

    {
        title: "Revenue",
        color: {
            background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },

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
// should be scrollable and only show 3 updates at a time or have a max height.
export const BulletinData = [
    {
        png: UilUserCircle,
        name: "John Doe",
        noti: "someone clean the bathroom",
        time: "25 seconds ago"
    },

    {
        png: UilUserCircle,
        name: "James Bond",
        noti: "lock the back door",
        time: "3 days ago"
    },

    {
        png: UilUserCircle,
        name: "Tony Stark",
        noti: "this program sucks",
        time: "1 week ago"
    },
];