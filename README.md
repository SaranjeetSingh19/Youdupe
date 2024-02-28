# Created React through CRA & Configured Tailwind

# Header

- SearchBar with some main icons.
- Also added toggler hambuger menu that will show and hide sidebar.

# Sidebar & ButtonList

- Created buttons in both components and rendered through Map.
- Used React Redux to store the state of toggler Sidebar.

# Fetched Youtube API

- Fetched youtube api through console.google.cloud.
- And then used that data to show on the UI Layer. (MainContainer)
- Created VideoCard and Mapped it in VideoContainer component.

# Routing and Dynamic Routing

- By createBrowserRouter, created routing on basic level.
- Also, performed dynamic routing for each VideoCard.

# Watch Page

- On watch page (Dynamic for every video) developed Title,
  view count, description, likes, channel name & thumbnail.
  [Everything works live and get updated continously]
- Also added live updatable likes, views & comments of video.
- Used mock data to build nested comments features.

# Suggestable searchbar through API & Debouncing

- Fetched api of youtube search suggestion and used it in search bar for live search responses.
- Used debouncing concept in search bar so that, unnecessary continously/regularly api call won't be make.

# Used Caching to store fetched data

- Stored user's searching results in redux store so, caching can be performed and for already searched results api calls won't get generated again and again.

# Live chat via API Polling 
- Used dummy data and performed API Polling in live chat feature.
- Also user can append it's own custom messages into live chat.
