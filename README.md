# mermeto
the given task
Create a  tab-switching layout.
Create a product card with the following data
Image 
Badge
Product Title
Vendor
Price
Compare at price Eg: 199
Calculate % off using JS. 
Create an Add to Cart button (Just a visual button)
Tab Switching:
When the user clicks on the "Men," "Women," or "Kids" tab, show the respective product cards and hide the others.
Implement a mechanism to toggle between the tabs, updating the displayed product cards accordingly.

#coding for this task is done using javascript, HTML and Css
1.javascript work:

Event Listener Setup:
The code begins by selecting all elements with the class .tab-btn using document.querySelectorAll('.tab-btn').
It then attaches a click event listener to each of these elements.
When a tab button is clicked, it removes the active-tab class from all tab buttons and adds it only to the clicked tab button, making it visually active.
Tab Switching:
Upon clicking a tab button, the code retrieves the value of the data-tab attribute of the clicked button to determine the target tab.
It then selects all elements with the class .product-card and iterates over them.
For each product card, if its data-tab attribute matches the target tab, it sets the display style property to 'block', making the corresponding product card visible. Otherwise, it sets the display to 'none', hiding the non-matching product cards.
Discount Calculation:
There's a function named calculateDiscount which calculates and displays the discount percentage for each product card.
This function takes a productcart as input, extracts the price and comparison price from the respective elements within the product card, calculates the discount percentage, and updates the badge accordingly with the calculated discount.
Initial Discount Calculation:
After defining the calculateDiscount function, the code iterates over all elements with the class .product-card and calls calculateDiscount for each of them. This ensures that the discount badges are initially calculated and displayed for all product cards.

2.html work:

This HTML code represents a product layout webpage with tab functionality for different product categories (Men, Women, Kids).
