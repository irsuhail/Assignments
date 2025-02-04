import './PricingSection.css'

const PricingCard = ({ title, price, features, buttonText = "Get Started", variant = "default" }) => (
  <div className="pricing-card">
    <h2>{title}</h2>
    <div className="price">
      {price === 'Free' ? price : `$${price}`}
    </div>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>
          <svg viewBox="0 0 20 20" className="check-icon">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={variant === "primary" ? "primary" : ""}>
      {buttonText}
    </button>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Starter",
      price: "Free",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]
    },
    {
      title: "Lorem Plus",
      price: "32.00",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]
    },
    {
      title: "Lorem Pro",
      price: "50.00",
      features: ["1 lorem ipsum", "Lorem, ipsum dolor.", "Monthly Updates"]
    }
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>
          The Right Plan for 
          <span className="highlight"> Your Business</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis magnam, sed officiis commodi labore odit.
        </p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            variant={index === 1 ? "primary" : "default"}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;