---
sidebar: false
groups:
- header: "Search"
  items:
  - title: "Before performing a search"
    status: ["na","done","done","done"]
  - title: "No Search results"
    status: ["na","done","done","done"]
  - title: "No Filter results"
    status: ["na","iq","iq","ip"]
- header: "No Data"
  items:
  - title: "No Notifications"
    status: ["na","done","done","done"]
  - title: "No Mail"
    status: ["na","done","done","done"]
- header: "No User Activity"
  items:
  - title: "No Data: Nothing has been created"
    status: ["na","done","done","done"]
  - title: "No Entry/Entries in lists/tables"
    status: ["na","done","done","done"]
  - title: "No Activities"
    status: ["na","done","done","done"]
  - title: "No Tasks"
    status: ["na","done","done","done"]
  - title: "No Saved/Starred Items added yet"
    status: ["na","done","done","done"]
- header: "Error"
  items:
  - title: "Unable to load"
    status: ["na","done","done","done"]
  - title: "Unable to connect"
    status: ["na","done","done","done"]
  - title: "Unable to upload"
    status: ["na","done","done","done"]
- header: "Success"
  items:
  - title: "Checkmark (Option 1)"
    status: ["na","done","done","done"]
  - title: "Checkmark (Option 2)"
    status: ["na","done","done","done"]
  - title: "Option 3 (high-five)"
    status: ["na","iq","done","iq"]
  - title: "Option 4 (balloon)"
    status: ["na","done","done","done"]
---

# Component Status

<StatusTable :groups="$page.frontmatter.groups" />
