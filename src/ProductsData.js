import almond_croissant_img from "./images/almond-croissant.png";
import almond_croissant2_img from "./images/almond-croissant2.png";
import almond_croissant3_img from "./images/almond-croissant3.png";
import artisan_sourdough_img from "./images/artisan-sourdough-bread.png";
import artisan_sourdough2_img from "./images/artisan-sourdough-bread2.png";
import artisan_sourdough3_img from "./images/artisan-sourdough-bread3.png";
import chocolate_chip_cookie_img from "./images/chocolate-chip-cookie.png";
import chocolate_chip_cookie2_img from "./images/chocolate-chip-cookie2.png";
import chocolate_chip_cookie3_img from "./images/chocolate-chip-cookie3.png";
import blueberry_muffin_img from "./images/blueberry-muffin.png";
import blueberry_muffin2_img from "./images/blueberry-muffin2.png";
import blueberry_muffin3_img from "./images/blueberry-muffin3.png";
import cinnamon_roll_img from "./images/cinnamon-roll.png";
import cinnamon_roll2_img from "./images/cinnamon-roll2.png";
import cinnamon_roll3_img from "./images/cinnamon-roll3.png";
import french_baguette_img from "./images/french-baguette.png";
import french_baguette2_img from "./images/french-baguette2.png";
import french_baguette3_img from "./images/french-baguette3.png";
import lemon_drizzle_img from "./images/lemon-drizzle-cake.png";
import lemon_drizzle2_img from "./images/lemon-drizzle-cake2.png";
import lemon_drizzle3_img from "./images/lemon-drizzle-cake3.png";
import vegan_banana_bread_img from "./images/vegan-banana-bread.png";
import vegan_banana_bread2_img from "./images/vegan-banana-bread2.png";
import vegan_banana_bread3_img from "./images/vegan-banana-bread3.png";
import raspberry_tart_img from "./images/raspberry-tart.png";
import raspberry_tart2_img from "./images/raspberry-tart2.png";
import raspberry_tart3_img from "./images/raspberry-tart3.png";
import pumpkinspiceloaf_img from "./images/pumpkin-spice-loaf.png";
import pumpkinspiceloaf2_img from "./images/pumpkinspice2.png";
import pumpkinspiceloaf3_img from "./images/pumpkinspice3.png";
import pumpkinspiceloaf4_img from "./images/pumpkinspice4.png";
import pumpkinspiceloaf5_img from "./images/pumpkinspice5.png";
import focacciaolive_img from "./images/focaccia-olive.png";
import focacciaolive2_img from "./images/focaccia-olive2.png";
import focacciaolive3_img from "./images/focaccia-olive3.png";
import focacciaolive4_img from "./images/focaccia-olive4.png";
import focacciatomato_img from "./images/focaccia-tomato.png";
import focacciatomato2_img from "./images/focaccia-tomato2.png";
import focacciatomato3_img from "./images/focaccia-tomato3.png";
import focacciatomato4_img from "./images/focaccia-tomato4.png";
import focacciagarlic_img from "./images/puglia-garlic-focaccia.png";
import focacciagarlic2_img from "./images/puglia-garlic-focaccia2.png";
import focacciagarlic3_img from "./images/puglia-garlic-focaccia3.png";
import focacciarosemary_img from "./images/puglia-focaccia-rosemary.png";
import focacciarosemary2_img from "./images/puglia-focaccia-rosemary2.png";
import focacciarosemary3_img from "./images/puglia-focaccia-rosemary3.png";
import pugliahalfbread_img from "./images/puglia-bread-half.png";
import pugliahalfbread2_img from "./images/puglia-bread-half2.png";
import pugliahalfbread3_img from "./images/puglia-bread-half3.png";
import durumsemola_img from "./images/durum-semola.png";
import durumsemola2_img from "./images/durum-semola2.png";
import durumsemola3_img from "./images/durum-semola3.png";

export const initialProducts = [
  // Focaccia with Olives
  {
    id: 1,
    title: "Focaccia with Olives",
    price: "$6.00",
    description:
      "Our Focaccia with Olives is a savory delight, blending the earthy flavors of ripe olives with a soft, airy focaccia. Each bite offers a perfect mix of olive's richness and the light, herb-infused bread, creating a truly Mediterranean experience.",
    imgUrl: focacciaolive_img,
    images: [
      focacciaolive_img,
      focacciaolive2_img,
      focacciaolive3_img,
      focacciaolive4_img,
    ],
    details:
      "This focaccia is made with high-quality olive oil, ripe olives, and a blend of herbs. Baked to perfection, it has a crisp exterior and a fluffy interior. Perfect as an appetizer, snack, or as a side to any meal.",
    reviews: [],
  },

  // Tomato Focaccia
  {
    id: 2,
    title: "Tomato Focaccia",
    price: "$5.50",
    description:
      "Savor the sun-kissed flavors of our Tomato Focaccia. Topped with ripe tomatoes, this focaccia is a beautiful harmony of sweet, tangy, and savory notes, accented with a hint of rosemary and sea salt.",
    imgUrl: focacciatomato_img,
    images: [
      focacciatomato_img,
      focacciatomato2_img,
      focacciatomato3_img,
      focacciatomato4_img,
    ],
    details:
      "Fresh tomatoes and a sprinkle of rosemary add a delightful twist to our classic focaccia. Made with extra virgin olive oil and a touch of sea salt, it's perfect for dipping, sandwiches, or as a standalone snack.",
    reviews: [],
  },

  // Garlic Focaccia
  {
    id: 3,
    title: "Garlic Focaccia",
    price: "$5.99",
    description:
      "Indulge in the aromatic and flavorful Garlic Focaccia, a true feast for the senses. Infused with roasted garlic and a blend of herbs, this focaccia offers a perfect balance of flavors that pairs wonderfully with a variety of dishes.",
    imgUrl: focacciagarlic_img,
    images: [focacciagarlic_img, focacciagarlic2_img, focacciagarlic3_img],
    details:
      "Baked with roasted garlic cloves and a selection of Mediterranean herbs, our focaccia is moist, fluffy, and rich in flavor. It's an ideal accompaniment to soups, salads, or enjoyed simply with a drizzle of olive oil.",
    reviews: [],
  },

  // Rosemary Focaccia
  {
    id: 4,
    title: "Rosemary Focaccia",
    price: "$6.00",
    description:
      "Our Rosemary Focaccia is a fragrant and delightful bread, infused with the fresh, piney aroma of rosemary. Its soft texture and herby taste make it a versatile and much-loved choice for any meal.",
    imgUrl: focacciarosemary_img,
    images: [
      focacciarosemary_img,
      focacciarosemary2_img,
      focacciarosemary3_img,
    ],
    details:
      "This focaccia features freshly chopped rosemary, imbuing it with a distinctive flavor and aroma. The combination of fine flour, olive oil, and sea salt results in a bread that's delicious on its own or as a base for bruschetta.",
    reviews: [],
  },

  // Puglia Half Bread
  {
    id: 5,
    title: "Puglia Half Bread",
    price: "$4.50",
    description:
      "Explore the authentic taste of Southern Italy with our Puglia Half Bread. This semi-dense, half-shaped loaf is perfect for those who love a hearty, rustic bread that pairs well with any dish.",
    imgUrl: pugliahalfbread_img,
    images: [pugliahalfbread_img, pugliahalfbread2_img, pugliahalfbread3_img],
    details:
      "Our Puglia Half Bread is a true artisanal product, made with a mix of traditional techniques and high-quality ingredients. It's ideal for dipping in olive oil, as a sandwich bread, or simply enjoyed on its own.",
    reviews: [],
  },

  // Durum Semola Bread
  {
    id: 6,
    title: "Durum Semola Bread",
    price: "$5.00",
    description:
      "Discover the golden, nutty flavor of our Durum Semola Bread. Made from high-quality durum wheat semolina, this bread has a distinctively rich taste and a delightful, slightly chewy texture.",
    imgUrl: durumsemola_img,
    images: [durumsemola_img, durumsemola2_img, durumsemola3_img],
    details:
      "Crafted from finely ground durum wheat semolina, this bread boasts a unique texture and a deep, satisfying flavor. It's perfect for toasting, making bruschetta, or as a companion to your favorite pasta dishes.",
    reviews: [],
  },
  {
    id: 7,
    title: "Artisan Sourdough Bread",
    price: "$7.99",
    description:
      "Experience the rustic charm of our Artisan Sourdough Bread. Each loaf is a testament to traditional baking artistry, featuring a perfectly golden, crackly crust encasing a soft, airy interior with a complex, slightly tangy flavor. This bread is a true delight, whether savored on its own or as a complement to your favorite spreads and sandwiches.",
    imgUrl: artisan_sourdough_img,
    images: [
      artisan_sourdough_img,
      artisan_sourdough2_img,
      artisan_sourdough3_img,
    ],
    details:
      "Crafted with a blend of premium flour, pure water, and our signature natural sourdough starter, this bread undergoes a slow fermentation process to develop its unique flavor and texture. Weight approx. 1 lb. Ideal for toasting, sandwiches, or as a table bread.",
    reviews: [],
  },
  {
    id: 8,
    title: "Chocolate Chip Cookies",
    price: "$2.50",
    description:
      "Indulge in the ultimate comfort treat with our Chocolate Chip Cookies. Fresh from the oven, these cookies strike the perfect balance between chewy and crisp, packed with rich, melty dark chocolate chips and a hint of vanilla. A timeless classic that brings a smile with every bite.",
    imgUrl: chocolate_chip_cookie_img,
    images: [
      chocolate_chip_cookie_img,
      chocolate_chip_cookie2_img,
      chocolate_chip_cookie3_img,
    ],
    details:
      "Made with high-quality ingredients including premium flour, rich butter, and dark chocolate chips, our cookies offer a delightful experience. Each pack contains 4 generously-sized cookies, perfect for sharing or treating yourself.",
    reviews: [],
  },
  {
    id: 9,
    title: "Almond Croissants",
    price: "$3.99",
    description:
      "Our Almond Croissants are a pastry lover's dream. Light, buttery, and flaky, each croissant is generously filled with a smooth, fragrant almond paste and topped with crisp, toasted sliced almonds. A dusting of powdered sugar adds a touch of elegance and sweetness.",
    imgUrl: almond_croissant_img,
    images: [
      almond_croissant_img,
      almond_croissant2_img,
      almond_croissant3_img,
    ],
    details:
      "Baked fresh daily, these croissants are made with high-quality butter, rich almond paste, and the finest flour. The exterior offers a satisfying crunch leading to a soft, almond-filled center. An exquisite choice for breakfast or as a decadent snack.",
    reviews: [],
  },
  {
    id: 10,
    title: "Blueberry Muffins",
    price: "$2.99",
    description:
      "Our Blueberry Muffins are a celebration of flavor and texture. Bursting with juicy, fresh blueberries, these muffins have a tender, moist crumb and a delicate golden-brown crust. The natural sweetness of the berries is complemented by a subtle hint of vanilla.",
    imgUrl: blueberry_muffin_img,
    images: [
      blueberry_muffin_img,
      blueberry_muffin2_img,
      blueberry_muffin3_img,
    ],
    details:
      "Crafted with fresh, plump blueberries, quality flour, and pure vanilla extract, these muffins are a delightful treat. Perfect for breakfast, as a snack, or as a sweet addition to your brunch table.",
    reviews: [],
  },
  {
    id: 11,
    title: "Cinnamon Rolls",
    price: "$3.50",
    description:
      "Savor the sweet, comforting embrace of our Cinnamon Rolls. Each roll is a swirl of soft, pillowy dough, rich with the warming flavors of cinnamon and brown sugar. Freshly baked, these rolls are crowned with a velvety cream cheese icing that melts enticingly into every layer.",
    imgUrl: cinnamon_roll_img,
    images: [cinnamon_roll_img, cinnamon_roll2_img, cinnamon_roll3_img],
    details:
      "Our cinnamon rolls are a labor of love, made with a buttery, yeast-leavened dough, swirled with a generous filling of cinnamon and brown sugar. The finishing touch is a lush cream cheese frosting that adds a creamy contrast to the spiced filling.",
    reviews: [],
  },
  {
    id: 12,
    title: "French Baguette",
    price: "$4.00",
    description:
      "Discover the essence of French baking with our classic French Baguette. This bread boasts a thin, crisp crust that gives way to a light, airy interior. Perfect for sandwiches, as a side for soups, or simply enjoyed with butter and cheese.",
    imgUrl: french_baguette_img,
    images: [french_baguette_img, french_baguette2_img, french_baguette3_img],
    details:
      "Baked fresh using a traditional recipe, our baguettes feature a simple yet perfect combination of flour, water, yeast, and salt. Each loaf is hand-shaped and scored before baking to achieve the characteristic crust and flavor.",
    reviews: [],
  },
  {
    id: 13,
    title: "Lemon Drizzle Cake",
    price: "$6.50",
    description:
      "Delight in the bright, tangy flavors of our Lemon Drizzle Cake. This light, moist cake is infused with the zest and juice of fresh lemons, then topped with a sweet, zesty lemon glaze that adds a sparkling finish.",
    imgUrl: lemon_drizzle_img,
    images: [lemon_drizzle_img, lemon_drizzle2_img, lemon_drizzle3_img],
    details:
      "Our Lemon Drizzle Cake is made with real butter, fresh lemons, and a tender crumb. The lemon glaze, drizzled over the top, creates a delightful balance of sweet and tart flavors, making it a perfect dessert for any occasion.",
    reviews: [],
  },
  {
    id: 14,
    title: "Vegan Banana Bread",
    price: "$8.00",
    description:
      "Our Vegan Banana Bread is a triumph of plant-based baking. Moist, rich, and packed with the natural sweetness of ripe bananas, this bread is a wholesome treat. Its delightful texture and depth of flavor offer a guilt-free indulgence.",
    imgUrl: vegan_banana_bread_img,
    images: [
      vegan_banana_bread_img,
      vegan_banana_bread2_img,
      vegan_banana_bread3_img,
    ],
    details:
      "Made with ripe bananas, almond milk, and whole wheat flour, this banana bread is not only delicious but also dairy-free and egg-free. It's perfect for a nutritious snack or a quick breakfast on the go.",
    reviews: [],
  },
  {
    id: 31,
    title: "Raspberry Tart",
    price: "$5.50",
    description:
      "Indulge in the vibrant taste of our Raspberry Tart. This exquisite dessert features a buttery, flaky crust filled with fresh, juicy raspberries nestled in a smooth, creamy custard. It's a symphony of textures and flavors that's simply irresistible.",
    imgUrl: raspberry_tart_img,
    images: [raspberry_tart_img, raspberry_tart2_img, raspberry_tart3_img],
    details:
      "Our Raspberry Tart is crafted with a rich, buttery pastry crust, filled with a luscious custard and topped with hand-picked fresh raspberries. The balance of tart berries and sweet custard makes it an elegant choice for any dessert table.",
    reviews: [],
  },
  {
    id: 22,
    title: "Pumpkin Spice Loaf",
    price: "$7.00",
    description:
      "Embrace the cozy flavors of autumn with our Pumpkin Spice Loaf. This seasonal delight combines the richness of pumpkin puree with a blend of warming spices like cinnamon, nutmeg, and clove, all topped with a sweet sugar glaze.",
    imgUrl: pumpkinspiceloaf_img,
    images: [
      pumpkinspiceloaf_img,
      pumpkinspiceloaf2_img,
      pumpkinspiceloaf3_img,
      pumpkinspiceloaf4_img,
      pumpkinspiceloaf5_img,
    ],
    details:
      "This loaf is lovingly made with real pumpkin puree, a blend of autumnal spices, and a touch of sugar glaze for sweetness. It's moist, flavorful, and perfect with a cup of coffee or tea on a crisp fall day.",
    reviews: [],
  },
];
