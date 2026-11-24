The general idea is to build an interactive portfolio visualization, showing each project as a 'star' in a 'constellation'. Prepare a "index.html" file in the portfolio folder following these instructions.

## Data
The data is in the "data.md" file. This will be updated over time, so the portfolio should be ready to accomodate new projects. It shouldn't update dinamically using the markdown file.

## Style
Use the style.css file from the "main" website, so that if I change fonts, colours, etc. this will automatically change.

## Stars
Each project is a 'star'. It should be visualized as a square (about 40px on desktop and 34px at smaller visualization sizes, scaled down as needed to prevent overlap), with a "distanced" border like images in the main website. On hovering, more details should appear (from the data.md: Name, Client(s), Topic(s), Type(s)). On clicking, a box should appear *over* the constellation with more details, like a lightbox.

## Visualizations
The type view always groups projects by type and sits slightly above center. Independent toggles show all matching connections by type, client, and topic without a randomized cap: use a dashed line for type, a dotted line for client, and a solid line for topic. Add a separate timeline view that places every project chronologically by month and year; the dates in `data.md` are required for this view. Extend the timeline arrow beyond the latest month. Switching between the type and timeline views should move the project stars rather than remove and recreate them. Add a topic treemap with one topic group sized by its number of associated projects; distribute square project stars in an even grid that uses each group’s space well, repeating projects with multiple topics in every relevant group. Preserve the project hover details and click behavior in topic mode, and animate stars as they move into the treemap. Keep the project-count footer visible in every visualization. Add a bottom-right toggle to switch the portfolio between its light and dark color schemes; show a sun icon in dark mode and a moon icon in light mode.

## Colours
Switch the colours of the main page, using the dark one for background and the light one for text etc.

## Size, etc.
The whole visualization should fit in one window, without scrolling. For mobile, forget about it now, but it will be a question later, so keep it in mind.

## Printable
Prepare a "index_pdf.html" version that is not interactive but instead displays all projects as cards in a very standard way.