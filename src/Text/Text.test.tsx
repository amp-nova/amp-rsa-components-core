// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import { Text } from "./Text";
import { TextProps } from "./Text.types";

describe("Test Component", () => {
  let props: TextProps;

  beforeEach(() => {
    props = {
      text: `## Worldwide shipping times & costs
\n
| Region   | Service                | Price   | Delivery time          |
|:---------|:-----------------------|:--------|:---------------------- |
| Europe   | Standard               | Free    | Up to 4 working days   |
|          | Express                | €6.95   | Currently unavailable  |
|          | Stationery*            | Free    | Up to 4 working days   |
|          | Collect in store****   | Free    | Next Working Day       |
\n
### Standard Delivery
\n
Orders placed before 2pm Monday to Friday will be despatched that same day. Orders placed after 2pm Monday to Friday will be despatched the following working day; orders placed after 2pm on Fridays will be despatched the following Monday.\n
\n 
### Additional Delivery Information 
\n 
- All orders are delivered in discreet outer packaging, smaller stationery orders will be delivered in an envelope.
- Due to the high volume of orders during our sale period, there may be a shipment dispatch delay. However, please be assured that we are working to get your purchases out to you as soon as possible. 
\n
## Tracking & Delivery
\n 
You will receive an email confirming when your order has been despatched.
\n 
Our delivery partner will email you tracking details to monitor the progress of your order.
\n 
Deliveries are made between 8:30am and 6pm, and will require a signature to ensure the safe and secure delivery your order.
\n 
We are unable to deliver to Parcel Motels.
\n 
We are unable to deliver goods to PO boxes – with the exception of those located in the United Arab Emirates.
\n 
For security reasons we are unable to deliver goods to hotels or Armed Forces Postal Addresses.
\n 
## Payments & Taxes
\n 
We accept Visa, MasterCard and American Express cards as payment methods on mulberry.com. In China we also accept AliPay.
\n 
Funds will be deducted from your bank once your order has been despatched from our warehouse.
\n
All orders placed undergo security checking to ensure that the payment card is being used by the authorised cardholder. It is also done to prevent online fraud occurring. Please ensure that the Billing Address entered during checkout is the address where the payment card you use is registered. You are able to select a delivery address different to your billing address (for instance, as a gift to arrive with a friend) during the checkout process.
\n 
## Insurance & lost goods
\n
All goods remain the property of the merchant until payment has been received in full and the goods have been delivered or collected. The merchant shall be responsible for the goods until the goods have been delivered or collected. The merchant ensures all items are insured against theft and accidental damage at no cost to the customer.
\n 
Once the goods have been delivered or collected, they cease to be the responsibility of the merchant.
\n 
If you are worried that your goods have been lost at some point on their journey to you, please contact our Customer Services team within 14 days of placing your order. For stationery orders please allow 28 days before contacting us. The merchant takes delivery discrepancies very seriously. If a delivery is reported as lost, we will work alongside our delivery partner to ensure a full investigation is carried out. During this time, the carrier may contact you directly and we kindly ask you to provide any additional information they may request to assist with their enquiries. This will ensure the matter is dealt with as quickly as possible.
\n 
In the unlikely event your goods arrive in a damaged condition, please contact our Customer Services team within 30 days of the delivery. You will also need to ensure that all original packaging is kept (both outer shipping packaging and internal contents).
\n
If you believe there is a discrepancy in the contents of an order you have received, please contact our Customer Services team within 48 hours of the delivery.
\n 
## Packaging & gifts
\n 
Your order will arrive in our signature packaging, most of our leather goods will come with a soft dust bag to ensure that the item is protected.
\n 
All orders are delivered in discreet outer packaging, smaller stationery orders of £50/$60/€60 or less will be delivered in an envelope.
\n 
If your purchase is a gift you can add a gift message during the checkout process and we will ensure no price details are included with the order.
\n
For security reasons we are only able to issue refunds to the original purchaser of the gift and do not offer gift exchanges.`,
     align: "left"
    };
  });

  const renderComponent = () => render(<Text {...props} />);

  it("should render Standard Delivery text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Text");

    expect(component).toHaveTextContent("Standard Delivery");
  });
});
