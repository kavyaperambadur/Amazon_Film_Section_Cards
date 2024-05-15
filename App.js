const arr = [
  {
    cardImg:
      "https://m.media-amazon.com/images/I/41iGDVzXq8L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Amazon Pay eGift Card",
    extraInfo: "",
    price: "₹10-₹3,000",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/51lX5oZbtQL._AC_UL480_FMwebp_QL65_.jpg",
    title:
      "Amazon Fire TV Stick with Alexa Voice Remote (includes TV and app controls) | HD streaming device",
    extraInfo: "5K+ bought in past month",
    price: "₹4,499 ",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/91alva4BXOL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Teri Baaton Mein Aisa Uljha Jiya2024",
    extraInfo: "Prime Video",
    price: "₹279 to rent or ₹0 with a Prime membership ",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/41rcp6H-KLL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Amazon Pay eGift Card",
    extraInfo: "",
    price: "₹10-₹3,000",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/91WSoBlKCrL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Tiger 3 2023",
    extraInfo: "Prime Video",
    price: "₹99 to rent or ₹0 with a Prime membership",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/61HVwBtUb9L._AC_UL480_FMwebp_QL65_.jpg",
    title:
      "D-fix® 1PCS Amazon Branded Prime Printed Tape 65 Meter Length, 72mm, (3-inch Width) Very Strong Self Adhesive",
    extraInfo: "50+ bought in past month",
    price: "₹94 ",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/91hKAy9HcEL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Ooru Peru Bhairavakona 2024",
    extraInfo: "Prime Video ",
    price: "₹79 to rent or ₹0 with a Prime membership ",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/91atBqtGuSL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Bawaal 2023",
    extraInfo: "Prime Video ",
    price: "₹279 to rent or ₹0 with a Prime membership ",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/81hSDsdtu0L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Jailer 2023",
    extraInfo: "Prime Video ",
    price: "₹79 to rent or ₹0 with a Prime membership",
  },
  {
    cardImg:
      "https://m.media-amazon.com/images/I/71xcz6N2CrL._AC_UL480_FMwebp_QL65_.jpg",
    title: "J Baby",
    extraInfo: "Prime Video ",
    price: "₹79 to rent  or ₹0 with a Prime membership",
  },
];

function App() {
  return (
    <div 
    style={{
    display: "flex",
    flexwrap:"flex-wrap"
    }}
    >
      {arr.map((e) => {
        return (
          <div
            style={{
              border: "20px solid #0000",
              width: "300px",
              marginBottom: "20px"
              
            }}
          >
            <img height={"250px"} src={e.cardImg} alt=""></img>
            <h4>{e.title}</h4>
            <p>{e.extraInfo}</p>
            <h2>{e.price}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
