export const company = {
  name: "TreeShop LLC",
  url: "https://treeshop.app",
  phone: "(386) 843-5266",
  phoneHref: "tel:+13868435266",
  email: "office@treeshop.app",
  address: {
    street: "New Smyrna Beach",
    city: "New Smyrna Beach",
    state: "FL",
    zip: "32168",
    country: "US",
  },
  geo: {
    latitude: 29.0280,
    longitude: -81.0649,
  },
  owners: ["Jeremiah Anderson", "Lacey Anderson"],
  founded: 2016,
  stats: {
    projects: "500+",
    counties: 32,
    googleRating: "4.8",
    reviewCount: "97",
    yearsExperience: "10+",
  },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "16:00",
  },
  social: {
    facebook: "https://www.facebook.com/TreeShopFlorida",
    googleMaps: "https://www.google.com/maps/place/Tree+Shop/@29.0280485,-81.0649498",
  },
  jobberUrl: "https://clienthub.getjobber.com/client_hubs/2ba111bd-c732-4f2f-9697-7ad1ea2348e6/public/work_request/embedded_work_request_form?form_id=2242380",
} as const;
