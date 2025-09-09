# Empty States

## Overview

Empty states are moments in the user experience when there is no content to display. They can also occur when there is an error or if the user hasn’t performed an action or task yet. They are an opportunity to improve the user experience and add more value.

<div class="bordered p-2">
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" style="display: flex; flex-direction: row; line-height: 30px; align-items: center; text-align: center;">Download our Sketch design kit of layout recommendations.
      </li>
      <li class="nav-item"><a class="btn btn-primary" style="margin-left: 30px;" href="https://sap.sharepoint.com/teams/FioriBrandExperienceSystem/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2FFioriBrandExperienceSystem%2FShared%20Documents%2FGeneral%2FPublic%2FSketch%20Design%20Kit%2FFiori%5FMoments%5FV1%2E0%2E0%2Esketch&parent=%2Fteams%2FFioriBrandExperienceSystem%2FShared%20Documents%2FGeneral%2FPublic%2FSketch%20Design%20Kit" target="_blank">Download Sketch Design Kit</a>
      </li>
    </ul>
  </div>
</div>
<br />
<br />

---

## Anatomy

Each empty state must have a solution-oriented **message**. It can also have a **call to action (CTA)** and an **illustration** to reinforce the message.

<img src="./.vuepress/public/6-ES-Anatomy@2x.png" alt="ES Anatomy image" width="745px" height="505px" />


<p class="text-center"><i>Anatomy of a UX illustration + message for SAP Fiori</i></p>

**Illustration**

The illustration helps clarify the situation and adds personality. It must always be paired with a message.

<br />

**Message**

The message consists of a headline **and** description:
<ul><li>The headline explains the reason for the empty state, preferably in a single line.</li>
<li>The description adds details and tells the user what to do next, in three lines or less.</li>
</ul>

<br />

**Call to Action (CTA)**

If there is a clear next step, include a CTA, ideally in the form of a button or link.

<br />

See also:

[Voice & Tone](./voice-tone.html)<br />
[About Illustrations](./illustrations.html)<br />
<br />

---

## Usage

Empty states should never feel empty or negative. They are opportunities to educate and engage with your users. A useful empty state should tell the user what the empty state is for, why the user is seeing it, and what the user can do next. When designed appropriately through relatable, encouraging content, empty states can enhance the user experience, add value, and be a quick UX win.

<div style="display:flex; justify-content:center;">
<img src="./.vuepress/public/6b-ES-FioriMoment_Example@2x.png" width="400px" height="421px" alt="UX illustration in a card image" />
</div>

<p class="text-center"><i>UX illustration in a card</i></p>

<Article description="If the user is working with a feature or application for the first time, use the empty state to help onboard them or tell them how to populate the screen. A well-placed encouragement can boost a new user’s confidence and make them feel positive about continuing. <br /><br/> In the case of errors, tell the user how to recover. For errors without solutions, explain what went wrong, so the user can attempt to troubleshoot. If possible, provide the user with a troubleshooting step (like refreshing the page or returning later)." />

<br/>
<br/>


##### **Common Use Cases**

An empty state can exist anywhere on the UI, such as a card, dialog, list, or table. They most commonly occur in the following situations:

<Borderedbox title="Initial interactions" description="The user is working with a feature or application for the first time. Or a user action is required before any content can be displayed." />

<br/>

<Borderedbox title="No user activity" description="The user hasn’t yet performed an action, so there’s nothing to show. Or the user has just completed a task or workflow, for example, the user has cleared their inbox or task list. Or the user has cleared all data." />

<br/>

<Borderedbox title="No data" description="There's no data for the user to see, for example, no notifications, no messages in the user’s inbox, no entries in tables or lists, etc." />

<br/>

<Borderedbox title="Errors" description="The system or application is unable to display information due to an error. Perhaps the user doesn’t have access to the page or there are network issues." />

<br/>
<br/>

##### **When to Include an Illustration**

You’ve probably heard the adage *A picture can tell a thousand words*. When appropriate, use an illustration paired with a message to help clarify a situation. Not all empty states require an illustration, but it’s a great way to convey the meaning of the message more immediately and show the Fiori personality through the distinctive visual language that is shared by all UX illustrations for SAP Fiori. You can find recommended pairings of illustrations and messages in the [Use Case Library for Empty States](#use-case-library).
<br />

If an illustration doesn’t enhance or contribute to the understanding of the situation, don’t use it.

Consider the message *No data*. It’s one we’ve probably all seen before. It’s not helpful and misses the opportunity to tell the user what to do next. Now compare it with a solution-oriented message, call to action (CTA), and illustration. Notice how this moment not only guides the user, it adds personality and enhances the user experience.

<threeColumnCard img1="6c-ES-Unhelpful-message@2x.png" alt1="Unhelpful message" img2="6c-ES-Fiori-moment@2x.png" alt2="Fiori moment image" />

<p class="text-center"><i>Unhelpful message (left) compared with illustration and solution-oriented message pair (right)</i></p>

<br />

---

## Best Practices

##### **Illustrations**
<br/>
<TableCards img1="7-ES-Illustration_Do@2x.png" alt1="ES-Illustration_Do" description1="Make sure the illustration, message, and CTA clarify the situation as one complete thought. <br /><br /> Use the right size illustration for the context. Check the links below for layout and spacing specifications." img2="7-ES-Illustration_Dont@2x.png" alt2="ES-Illustration_Dont" description2="Don’t use an illustration without a message. Don’t use a scene illustration within a smaller UI element, such as a card. <br /><br /> Illustration types are designed specifically for variously sized components/controls." />

<br/>
<br/>

##### **Messages**
<br/>
<TableCards img1="7b-ES-Messages_Do@2x.png" alt1="ES Messages Do" description1="Make the headline and description brief, positive, and solution-oriented. Personalize the message if you can. The headline should be a single thought on one line; certainly no more than two lines. The description should be three lines or less and tell the user what’s happening and what to do next. Be extra-vigilant with language. Users can quickly become frustrated by certain types of empty states, especially ones caused by errors. <br /><br/> Encourage the user to perform an action, where appropriate. If there is a clear next step, include a CTA, ideally in the form of a button or link. A CTA can turn an empty state into a situation that is helpful to the user. But be sure that the user has permission for the next step. If you’re not certain, or if there is no clear next step, consider a more universal CTA, or none at all."  img2="7b-ES-Messages_Dont@2x.png" alt2="ES-Messages_Dont" description2="Don’t use hyperlinks in the headline or description; they will be confusing. <br /><br /> Don’t be tempted to use a jokey tone; it’s unlikely to be appreciated, especially in the case of errors. <br /> <br/>Don’t repeat the headline in the CTA." />


<br/>
<br/>

##### **Grammar and Punctuation**
<br/>
<TableCards img1="8d-SS-Messages_Do@2x.png" alt1="SS Message Do" description1="Use sentence case for your headline and description. If the headline is a single sentence, omit the period at the end of the sentence. If the headline is two sentences, add a period at the end of each sentence. End each sentence in the description with a period “.” <br /> <br /> Use exclamation points sparingly. Use them only to be encouraging, not negatively. It’s okay to use exclamation points in headlines like ”Almost there!“ (to show progress during a process), but use them appropriately." img2="8d-SS-Messages_Dont@2x.png" alt2="Message2" description2="Use exclamation points sparingly. Use them only to be encouraging, not negatively. It’s okay to use exclamation points in headlines like ”Almost there!“ (to show progress during a process), but use them appropriately. <br/><br/> Don’t use exclamation points for everyday situations like “No new notifications!” And don’t use multiple exclamation points!!!" />

<br />

<Article description="Ask your user assistance (UA) developer to review your messages before development close. If a message or illustration is changed, work with your UA developer to keep the message and illustration in sync." />

<br />
<br/>

See also:

[Voice & Tone](./voice-tone.html)<br />
[About Illustrations](./illustrations.html)<br />
[SAP Fiori UI Text Guidelines Link](https://ux.wdf.sap.corp/fiori-design-web/ui-text-guidelines-for-sap-fiori/) <br />
[SAP Fiori Responsive Spacing System](https://experience.sap.com/fiori-design-web/responsiveness-adaptiveness/#responsive-design)

<br />

---

## Design & Layout

##### **Types and Sizing**

The UX illustration library is designed in three sizes to work within a variety of UI elements or controls:

<img src="./.vuepress/public/7d-ES-Spot_specs@2x.png" alt="ES spot image" width="800px" height="390px" />

<p class="text-center"><i><b>Spot (small):</b> For medium-sized cards or card-like UI elements</i></p>

<br/>

<img src="./.vuepress/public/7d-ES-Dialog_specs@2x.png" alt="ES dialog image" width="800px" height="542px" />

<p class="text-center"><i><b>Dialog (medium):</b> For dialogs</i></p>

<br/>

<img src="./.vuepress/public/7d-ES-Scene_specs@2x.png" alt="ES scene image" width="800px" height="725px" />

<br/>

<p class="text-center"><i><b>Scene (large):</b> For full-page or large UI areas, such as search, list, or table pages</i></p>

<br/>

<Article description="We're expanding our illustration library to accommodate more use cases. As we grow the library, we plan to add more sizes to reflect product needs and use cases." />

<br />
<br />

##### **Typeface**
Use typeface 72 and follow the SAP Fiori typography guidelines for the headline and description.

<br />

See also:

[SAP Fiori Typography Guidelines](https://experience.sap.com/fiori-design-web/typography/)<br />
[Illustration Types and Sizing](./illustrations.html#illustration-types-and-sizing)<br />
[Resources](./resources.html)

<br />

---

## Accessibility

Although illustrations are not essential for users to understand the content and purpose of the paired message, they should be announced by screen readers. This requires an alternative text which needs to be set by the product team.

<Article description="Don’t include text in illustrations. Screen readers are unable to read text that is part of an image." />

<br />

---

## Use Case Library

Here you’ll find pairings of illustrations and messages, as well as the code to implement them. The illustrations and messages are consistent with the conversational tone of the SAP Fiori personality.
<br />
<br />
<Article description="The code examples here assume the illustration SVG files are included in the page. If the illustrations are referenced externally, the use  xlink:href attribute must point to the file. For more information, see the <a href='https://github.tools.sap/sap-design-ops/fiori-moments/blob/master/README.md' target='_blank'>GitHub README</a>"/>

<br />
<Article description="Please don't hack the illustrations or modify them. We're working on a way for you to contribute to the illustration library, so that we can scale the library more quickly, and yet maintain a consistent look and feel. See also
<a href='./illustrations.html#creating-your-own-illustrations'>Creating Your Own Illustrations</a>. However, please contact <a href='mailto:cara.stallone@sap.com'>Cara Stallone</a> with your needs before creating an illustration. Also check our <a href='./status.html'>Component Status</a> page to see if we have a design or use-case in the pipeline." />

<br />
<br />

See also:

[Voice & Tone](./voice-tone.html)<br />
[Resources](./fiori-moments/resources.html)<br />

<br />

##### **Search**

The user hasn’t performed a search, so there’s nothing to show. Or the user’s search query didn’t return any results.

<emptyStateAccordion accordionId="accordion-1" sceneOptionDisabled="disabled" title="Before performing a search" DropDown="2" type="spot" id="BeforeSearch" header="Headline text goes here" message="Description provides user with clarity and possible next steps." headerSpot="Headline text goes here" messageSpot="Description provides user with clarity and possible next steps." typeDialog="dialog" idDialog="BeforeSearch" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." headerDialog2="Headline text goes here" messageDialog2="Description provides user with clarity and possible next steps." typeScene="scene" idScene="BeforeSearch" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." description="<div class='border-left border-secondary'><strong>Let’s get some results</strong><br/>Start by providing your search criteria.</div>" />

<emptyStateAccordion accordionId="accordion-2" title="No search results" DropDown="2" type="spot" id="NoSearchResults" header="Headline text goes here" message="Description provides user with clarity and possible next steps." headerSpot="Headline text goes here" messageSpot="Description provides user with clarity and possible next steps." typeDialog="dialog" idDialog="NoSearchResults" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." headerDialog2="Headline text goes here" messageDialog2="Description provides user with clarity and possible next steps." typeScene="scene" idScene="NoSearchResults" headerScene1="Headline text goes here" messageScene1="Maybe try another filter or a search term?" headerScene2="Headline text goes here" messageScene2="Description provides user with clarity and possible next steps." description="Professional tone<br /><div class='border-left border-secondary'><strong>No results found</strong><br/>Try changing your search criteria? </div><br/><br/>Business Casual tone<br /><div class='border-left border-secondary'><strong>We couldn’t find that</strong><br />Try adjusting your search? </div>" />

<br />
<br/>

##### **Initial Interactions**

The user is using the application for the first time. Or the area is intentionally left blank for the user to start an action. Or the user has just signed up.

<emptyStateAccordion accordionId="accordion-3" title="Create new report, program, table, presentation, or pool" type="spot" typeDialog="dialog" typeScene="scene" DropDown="2" nospotsvgcss="nospotsvg" nodialogcss="nodialogsvg" noscenecss="noscenesvg" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nosvg="nosvg"  description="<div class='border-left border-secondary'><strong>Create a new presentation</strong><br/>
  Create presentation <i>(button)</i> <br/><br/>
  Note: Replace the word presentation with  report, program, table, pool, etc. as appropriate.
  Use a simple imperative command, accompanied by a + symbol.</div>" />

<br />
<br/>



##### **No Data**

There’s no data that the user can see.

<emptyStateAccordion accordionId="accordion-5" title="No notifications" DropDown="2" isOptionDisabled="disabled" dialogOptionDisabled="disabled" sceneOptionDisabled="disabled" type="spot" id="NoNotifications" header="Headline text goes here" message="Description provides user with clarity and possible next steps." typeDialog="dialog" idDialog="NoNotifications" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." typeScene="scene" idScene="NoNotifications" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." description="Professional tone<br />
  <div class='border-left border-secondary'><strong>You’ve no new notifications</strong><br />
  Check back again later. </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>
  Nothing new here</strong><br />
  Check back again later. </div>"  />



<emptyStateAccordion accordionId="accordion-6" title="No mail" DropDown="2" type="spot" id="NoMail" header="Headline text goes here" message="Description provides user with clarity and possible next steps." isOptionDisabled="disabled" dialogOptionDisabled="disabled" sceneOptionDisabled="disabled" typeDialog="dialog" idDialog="NoMail" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." typeScene="scene" idScene="NoMail" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." description="Professional tone<br />
  <div class='border-left border-secondary'><strong>No new mail</strong><br/>
    Check back again later. <br />
    Compose <i>(button)</i> </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>No new mail</strong><br/>
    You’re all caught up! <br />
    Compose <i>(button)</i> </div>"  />


<emptyStateAccordion accordionId="accordion-7" title="No products, items, images, or videos" DropDown="2" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nospotsvgcss="nospotsvg" nosvg="nosvg" type="spot" nodialogcss="nodialogsvg" noscenecss="noscenesvg" typeDialog="dialog" typeScene="scene" description="Professional tone<br />
  <div class='border-left border-secondary'><strong>There are no videos yet </strong><br/>
    Would you like to add one now? <br />
    Add video <i>(button)</i> <br/><br/>
    <strong>There are no videos yet </strong><br/>
    When there are, you’ll see them here.
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like there are no videos yet </strong><br/>
    Want to add one now? <br />
    Add video <i>(button)</i> <br /><br />
    <strong>Looks like there are no videos yet </strong><br />
    When there are, they’ll show up here.<br /><br />
    <strong>Nothing to see here </strong><br />
    There are no videos to show you right now. <br />
    When there are, they’ll show up here.
  </div>"  />


<emptyStateAccordion accordionId="accordion-8" title="No classes, learning assignments, or tutorials" DropDown="2" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nospotsvgcss="nospotsvg" nodialogcss="nodialogsvg" noscenecss="noscenesvg" type="spot" typeDialog="dialog" typeScene="scene" description="Professional tone<br />
  <div class='border-left border-secondary'><strong>You’ve no learning assignments yet </strong><br/>
    Would you like to see the courses recommended for you? <br />
    View courses <i>(button)</i> <br/><br/>
    <strong>You’ve no learning assignments yet </strong><br/>
    When you do, you’ll see them here.<br/><br/>
    <strong>You’ve no classes yet </strong><br/>
   Would you like to search for one now?<br/>
   View classes <i>(button)</i>
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like you don’t have any learning assignments yet </strong><br/>
    Want to see the courses recommended for you? <br />
    View courses <i>(button)</i> <br/><br/>
    <strong>Looks like you don’t have any learning assignments yet </strong><br/>
    When you do, they’ll show up here. <br/><br/>
    <strong>Looks like you don’t have any classes yet </strong><br/>
    Want to search for one now?<br/>
    View classes <i>(button)</i>
 </div>"  />


<emptyStateAccordion accordionId="accordion-9" title="No history" DropDown="2" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nospotsvgcss="nospotsvg" nodialogcss="nodialogsvg" noscenecss="noscenesvg" type="spot" typeDialog="dialog" typeScene="scene" description="<div class='border-left border-secondary'><strong>There’s no history yet</strong><br/>
    When there is, you’ll see it here. <br />
 </div>"/>


<emptyStateAccordion accordionId="accordion-10" title="No feeds" DropDown="2" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nospotsvgcss="nospotsvg" nodialogcss="nodialogsvg" noscenecss="noscenesvg" type="spot" typeDialog="dialog" typeScene="scene" description="Professional tone<br />
  <div class='border-left border-secondary'><strong>There are no feeds yet </strong><br/>
    Would you like to create one now? <br /><br />
    Create feed <i>(button)</i> <br />
    <strong>There are no feeds yet </strong><br />
    When there are, you’ll see them here.
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like there are no feeds yet </strong><br/>
    Want to create one now?<br />
    Create feed <i>(button)</i>
</div>"  />


<emptyStateAccordion accordionId="accordion-11" title="Nothing to preview, display, or show" DropDown="2" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nospotsvgcss="nospotsvg" nodialogcss="nodialogsvg" noscenecss="noscenesvg" type="spot" typeDialog="dialog" typeScene="scene" description="<div class='border-left border-secondary'><strong>There’s nothing to preview yet </strong><br/>
    When there is, you’ll see it here.<br /><br />
    <i>Note</i>: Replace the word <i>preview</i> with <i>display, show</i>, etc. as appropriate.
 </div>"  />


<emptyStateAccordion accordionId="accordion-12" title="Nothing in your cart" DropDown="2" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nospotsvgcss="nospotsvg" nodialogcss="nodialogsvg" noscenecss="noscenesvg" type="spot" typeDialog="dialog" typeScene="scene" description="Professional tone<br />
  <div class='border-left border-secondary'><strong>There’s nothing in your cart yet</strong><br/>
    Continue shopping? <br />
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like you have nothing in your cart</strong><br/>
    Continue shopping?<br /><br />
    <strong>Your cart is empty!</strong><br/>
    Continue shopping?<br />
    We don't mind waiting!
</div>" />
<br/>

##### **No User Activity**

The user hasn’t performed an action, so there’s nothing to show. Or the user has just completed a task or workflow, or has cleared all data. This should pair with a CTA button when appropriate.

<emptyStateAccordion accordionId="accordion-13" title="No data because nothing has been created yet" DropDown="2" type="spot" id="NoData" header="Headline text goes here" message="Description provides user with clarity and possible next steps." isOptionDisabled="disabled" dialogOptionDisabled="disabled" sceneOptionDisabled="disabled" typeDialog="dialog" idDialog="NoData" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." typeScene="scene" idScene="NoData" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps."  description="Professional tone<br />
  <div class='border-left border-secondary'><strong>There are no sales orders yet</strong><br/>
    Would you like to create one now? <br />
    Create sales order <i>(button)</i> <br/><br/>
    <strong>There are no sales orders yet</strong><br/>
    When there are, you’ll see them here.<br/><br/>
    <strong>There’s no data yet</strong><br/>
    When there is, you’ll see it here.<br/><br/>
    <strong>No returns have been processed</strong><br/>
    Check back again later.<br/>
  </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>
    Looks like no sales orders have been created</strong><br/>
    Want to create one now?<br />
    Create sales order <i>(button)</i> <br/><br/>
    <strong>Looks like no sales orders have been created</strong><br/>
    When they have, they’ll show up here.<br/><br/>
    <strong>Looks like there’s no data yet</strong><br/>
    When there is, you’ll see it here.<br/><br/>
    <strong>Looks like no returns have been processed</strong><br/>
    Check back again later. <br/><br/>
    <i>Note</i>: Replace the words <i>sales orders, data, returns</i>, etc. as appropriate.
 </div>"  />


<emptyStateAccordion accordionId="accordion-14" title="No entries in lists or tables" DropDown="2" dialogOptionDisabled="disabled" sceneOptionDisabled="disabled" type="spot" id="NoEntries" header="Headline text goes here" message="Description provides user with clarity and possible next steps."  typeDialog="dialog" idDialog="NoEntries" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." typeScene="scene" idScene="NoEntries" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps."  description="Professional tone<br />
  <div class='border-left border-secondary'><strong>There are no entries yet</strong><br/>
    When there are, you’ll see them here. <br />
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like there are no entries yet</strong><br/>
    When there are, they’ll show up here.
</div>" />


<emptyStateAccordion accordionId="accordion-15" title="No activities" DropDown="2" type="spot" id="NoActivities" header="Headline text goes here" message="Description provides user with clarity and possible next steps." typeDialog="dialog" idDialog="NoActivities" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." isOptionDisabled="disabled" dialogOptionDisabled="disabled" typeScene="scene" idScene="NoActivities" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." headerScene2="Headline text goes here" messageScene2="Description provides user with clarity and possible next steps." description="Professional tone<br />
  <div class='border-left border-secondary'><strong>You’ve not added any activities yet </strong><br/>
    Would you like to add one now?<br />
    Add activity <i>(button)</i>
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like you’ve not added any activities yet</strong><br/>
    Want to add one now? <br/>
    Add activity <i>(button)</i>
</div>" />


<emptyStateAccordion accordionId="accordion-16" title="No tasks" DropDown="2" id="NoTasks" isOptionDisabled="disabled" dialogOptionDisabled="disabled" sceneOptionDisabled="disabled" type="spot" typeDialog="dialog" idDialog="NoTasks" header="Headline text goes here" message="Description provides user with clarity and possible next steps." headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." typeScene="scene" idScene="NoTasks" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." description="Professional tone<br />
  <div class='border-left border-secondary'><strong>You’ve no new tasks</strong><br/>
    When you do, you’ll see them here. <br />
    Check back again later. <br/>
    Add task <i>(button)</i></div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like you’ve no new tasks</strong><br/>
    When you do, they’ll show up here. <br/>
</div>" />


<emptyStateAccordion accordionId="accordion-18" title="No saved or starred items added yet" DropDown="2" id="NoSavedItems" type="spot" header="Headline text goes here" message="Description provides user with clarity and possible next steps." isOptionDisabled="disabled" dialogOptionDisabled="disabled" sceneOptionDisabled="disabled" typeDialog="dialog" idDialog="NoSavedItems" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." typeScene="scene" idScene="NoSavedItems" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." description="Professional tone<br /><div class='border-left border-secondary'><strong>You’ve no new pins</strong><br/>
    Would you like to add one now? <br />
    Add pin <i>(button)</i> <br/><br/>
    <strong>You’re not following any suppliers</strong>
    Would you like to search for one now?<br />
    Search <i>(button)</i> <br /><br />
    <strong>You’ve not added any favorites yet </strong>
    Would you like to create a list of your favorite items now?
    Create new list <i>(button)</i> </div><br /><br />
 Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like you’ve no new pins </strong><br />
    Want to add one now? <br />
    Add pin <i>(button)</i> <br /><br />
    <strong>Looks like you’re not following any suppliers] </strong><br />
    Want to search for one now? <br />
    Search <i>(button)</i> <br /><br />
    <strong>Looks like you’ve not added any favorites yet</strong> <br />
    Want to create a list of your favorite items now? <br />
    Create new list <i>(button)</i> <br /><br />
    <i>Note</i>: Replace the words <i>pins, suppliers, favorites</i>, etc. as appropriate.
</div>" />

<emptyStateAccordion accordionId="accordion-19" title="No feedback received or sent" DropDown="2" nospotsvg="This illustration is not yet available." noscenesvg="This illustration is not yet available." nodialogsvg="This illustration is not yet available." nospotsvgcss="nospotsvg" nodialogcss="nodialogsvg" noscenecss="noscenesvg" type="spot" typeDialog="dialog" typeScene="scene" description="Professional tone<br />
  <div class='border-left border-secondary'><strong>There isn’t any feedback for you to review yet</strong><br/>
    When there is, you’ll see it here.<br /><br/>
    <strong>You’ve not sent any feedback yet </strong><br />
    Would you like to write your feedback now? <br />
    Provide feedback <i>(button)</i> <br />
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>You’ve not received any feedback yet </strong><br/>
    When you do, it'll show up here. <br/><br/>
    <strong>You’ve not sent any feedback yet</strong><br/>
    Want to write your feedback now? <br/>
    Provide feedback (button)
</div>" />
<br/>

##### **Error**

The system is unable to display information.

<emptyStateAccordion accordionId="accordion-20" title="Unable to load" DropDown="3" type="spot" id="UnableToLoad" header="Headline text goes here" message="Description provides user with clarity and possible next steps." headerSpot="Headline text goes here" messageSpot="Description provides user with clarity and possible next steps." headerSpot3="Headline text goes here" messageSpot3="Description provides user with clarity and possible next steps." typeDialog="dialog" idDialog="UnableToLoad" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." headerDialog2="Headline text goes here" messageDialog2="Description provides user with clarity and possible next steps." headerDialog3="Headline text goes here" messageDialog3="Description provides user with clarity and possible next steps." typeScene="scene" idScene="UnableToLoad" sceneOptionDisabled="disabled" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." description="Professional tone<br />
  <div class='border-left border-secondary'><strong>Unable to load data</strong><br/>
    Check your internet connection. If that’s not it, try reloading. If that still doesn’t help, check with your administrator.<br />
    Reload <i>(button)</i>
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like the data isn’t loading</strong><br/>
    Check your internet connection. And if that’s not it, try reloading. If that still doesn’t help, check with your administrator.
 <br/>
    Reload <i>(button)</i>
</div><br />
<i>Note:</i> We’ve included <i>try reloading the page</i> as a possible solution, but be sure to check whether this is appropriate for your situation and replace it if necessary." />


<emptyStateAccordion accordionId="accordion-21" title="Unable to upload" DropDown="2" id="UnableToUpload" type="spot" header="Headline text goes here" message="Description provides user with clarity and possible next steps." typeDialog="dialog" idDialog="UnableToUpload" headerDialog1="Headline text goes here" messageDialog1="Description provides user with clarity and possible next steps." typeScene="scene" idScene="UnableToUpload" sceneOptionDisabled="disabled" headerScene1="Headline text goes here" messageScene1="Description provides user with clarity and possible next steps." isOptionDisabled="disabled" dialogOptionDisabled="disabled" description="Professional tone<br />
  <div class='border-left border-secondary'><strong>Unable to upload</strong><br/>
  Check your internet connection. If that’s not it, check the file format and file size. Otherwise contact your administrator.<br />
    Reload <i>(button)</i>
 </div><br/><br/>
  Business Casual tone<br />
  <div class='border-left border-secondary'><strong>Looks like we can't upload</strong><br/>
    Check your internet connection. If that’s not it, make sure the file format is supported and the file size isn’t too large. If that still doesn’t help, contact your administrator.
 <br/>
    Reload <i>(button)</i>
</div><br />
<i>Note:</i> We’ve included <i>try reloading the page</i> as a possible solution, but be sure to check whether this is appropriate for your situation and replace it if necessary." />
