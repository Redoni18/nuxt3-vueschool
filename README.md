# Landing Page Sanity CMS Guide

Welcome to the Content Management System (CMS) guid for managing the landing page content. This guide will walk you through the process of updating various dynamic elements on the landing page.

## Getting Started
1. **Online Sanity Studio:** The easiest way to update the content for each section would to visit the online version of the Sanity Studio [here](https://vueschoolwebsite.sanity.studio/structure)
2. **Run Sanity Studio locally:** If you want to get a bit more technical and want to look through the code and run the Sanity Studio locally then follow these steps:

   - Navigate to the root folder of the project.
   - Run the command `npm install` to install the necessary dependencies.
   - Navigate to the sanity folder named `vueschool-sanity`.
   - Run the command `npm run dev` to start the Sanity Studio locally.

## Updating the Hero Section

1. **H1 Title:** To update the main title (H1) of the Hero section, navigate to the CMS and find the Hero section. Look for the input field labeled "H1 Title" and enter your desired title text.

2. **Paragraph Content:** Similarly, locate the input field labeled "Paragraph Content" within the Hero section and update it with the desired paragraph content.

3. **Button Text:** Lastly, find the input field labeled "Button Text" and modify it to change the text displayed on the Call-to-Action (CTA) button.

## Managing Dynamic Elements

### Courses, Lessons, Hours

1. **Video Lessons Number:** To update the number of the video lessons of the Landing page, navigate to the CMS and find the Platform Statistics. Look for the input field labeled "Video Lessons Number" and enter the number.

2. **Courses Number:** To update the number of the courses of the Landing page, navigate to the CMS and find the Platform Statistics. Look for the input field labeled "Courses Number" and enter the number.

3. **Number of hours:** To update the number of hours of the Landing page, navigate to the CMS and find the Platform Statistics. Look for the input field labeled "Number of hours" and enter the number.

### Pricing Card Bullet Points

1. **Editing Package Offers:** Navigate to the Bundles Section in the CMS and find the pricing bundle you want to update. Look for an option to edit the bundle or its package offerings. You can then add, remove, or modify the bullet points as needed.

   - Select specific bundle type `Basic`, `Professional` etc
   - Edit the title or name of the bundle type to your specific case
   - Within the package offers you can add a new bullet point
   - You can add as many bullet points as you want
   - After adding a bullet point if that bullet point applies to the specific bundle type then you can toggle the `appliesToPackage` option `ON`
   - If bullet point does not apply to the bundle type then you can chose to remove it or leave it and just toggle the `appliesToPackage` option to `OFF`
## Saving Changes

1. **Preview Changes:** Before saving any updates, it's a good idea to preview them to ensure everything looks as expected. Most CMS platforms offer a preview mode or a way to view changes before publishing.

2. **Publish Updates:** Once you're satisfied with the changes, find the "Publish" or "Save" button in the CMS interface and click on it to make your updates live on the landing page.

That's it! You've successfully updated the landing page content using the Sanity CMS.
