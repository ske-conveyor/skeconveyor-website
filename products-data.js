// ============================================================
// PRODUCT CATALOG — single source of truth for all products.
// To add a new product: copy one block below, change the fields.
// id         -> used in the URL (product.html?id=this-value), lowercase, hyphens only
// category   -> must match a category id used in categories.html links
// image      -> path to the product photo; drop the real photo into
//               assets/products/ using this exact filename and it appears automatically
// blurb      -> short description shown on the product detail page
// use        -> where/how this product is typically used
// ============================================================

const PRODUCTS = [
  {
    "id": "belt-conveyor",
    "name": "Belt Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/belt-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "roller-conveyor",
    "name": "Roller Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/roller-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "flexi-roller-conveyor",
    "name": "Flexi-Roller Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/flexi-roller-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "vertical-lifter",
    "name": "Vertical Lifter",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/vertical-lifter.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "spiral-conveyor",
    "name": "Spiral Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/spiral-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "telescopic-conveyor",
    "name": "Telescopic Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/telescopic-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "loading-unloading-conveyor",
    "name": "Loading Unloading Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/loading-unloading-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "slat-chain-conveyor",
    "name": "Slat Chain Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/slat-chain-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "modular-belt-conveyor",
    "name": "Modular Belt Conveyor",
    "category": "conveyors",
    "categoryLabel": "Conveyors",
    "image": "assets/products/modular-belt-conveyor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "fluid-bed-dryer",
    "name": "Fluid Bed Dryer",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/fluid-bed-dryer.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "hand-wash-station",
    "name": "Hand Wash Station",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/hand-wash-station.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "hopper-topper",
    "name": "Hopper Topper",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/hopper-topper.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "glass-cullet-trolley",
    "name": "Glass Cullet Trolley",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/glass-cullet-trolley.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "bar-stool",
    "name": "Bar Stool",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/bar-stool.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "tool-cart-trolley",
    "name": "Tool Cart Trolley",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/tool-cart-trolley.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "storage-table",
    "name": "Storage Table",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/storage-table.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "cheese-roll-trolley",
    "name": "Cheese Roll Trolley",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/cheese-roll-trolley.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "change-part-trolley",
    "name": "Change Part Trolley",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/change-part-trolley.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "tea-with-cupboard-trolley",
    "name": "Tea with Cupboard Trolley",
    "category": "customized-items",
    "categoryLabel": "Customized Items",
    "image": "assets/products/tea-with-cupboard-trolley.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "conveyor-belts",
    "name": "Conveyor Belts",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/conveyor-belts.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "modular-belts",
    "name": "Modular Belts",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/modular-belts.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "conveyor-roller",
    "name": "Conveyor Roller",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/conveyor-roller.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "plc",
    "name": "PLC",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/plc.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "leveller-pad",
    "name": "Leveller Pad",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/leveller-pad.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "pneumatic-cylinder",
    "name": "Pneumatic Cylinder",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/pneumatic-cylinder.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "bearings",
    "name": "Bearings",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/bearings.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "photoelectric-sensor",
    "name": "Photoelectric Sensor",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/photoelectric-sensor.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "limit-switch",
    "name": "Limit Switch",
    "category": "spares",
    "categoryLabel": "Spares",
    "image": "assets/products/limit-switch.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "frp-manhole-covers",
    "name": "FRP Manhole Covers",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/frp-manhole-covers.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "ug-tank-cover",
    "name": "UG Tank Cover",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/ug-tank-cover.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "circle-oh-tank-cover",
    "name": "Circle OH Tank Cover",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/circle-oh-tank-cover.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "square-oh-tank-cover",
    "name": "Square OH Tank Cover",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/square-oh-tank-cover.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "frp-water-gully-covers",
    "name": "FRP Water Gully Covers",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/frp-water-gully-covers.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "frp-recessed-cover",
    "name": "FRP Recessed Cover",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/frp-recessed-cover.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "frp-pultruded-grating",
    "name": "FRP Pultruded Grating",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/frp-pultruded-grating.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "frp-molded-gratings",
    "name": "FRP Molded Gratings",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/frp-molded-gratings.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  },
  {
    "id": "frp-louvers",
    "name": "FRP Louvers",
    "category": "frp-items",
    "categoryLabel": "FRP Items",
    "image": "assets/products/frp-louvers.jpg",
    "blurb": "Size: As per customer requirement. Description to be added \u2014 send us the product details and we'll fill this in.",
    "use": "Typical use-case to be added."
  }
];
