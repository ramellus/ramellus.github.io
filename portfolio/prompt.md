The general idea is to build an interactive portfolio visualization, showing each project as a 'star' in a 'constellation'. Prepare a "index.html" file in the portfolio folder following these instructions.

## Data
The data is in the "data.md" file. This will be updated over time, so the portfolio should be ready to accomodate new projects. It shouldn't update dinamically using the markdown file.

## Style
Use the style.css file from the "main" website, so that if I change fonts, colours, etc. this will automatically change.

## Stars
Each project is a 'star'. it should be visualized as a little square (maybe 30px x 30px, or less), with a "distanced" border like images in the main website. On hovering, more details should appear (from the data.md: Name, Client(s), Topic(s), Type(s)). On clicking, a box should appear *over* the constellation with more details, like a lightbox.

## Constellations
Stars should be connected between themselves in the following way. A solid line (1px width) if two stars have the same topic. A dashed line (1px width) if they have the same type. A dotted line (1px width) if they have the same client. The portfolio should have three visualizations, triggered by buttons: by type, by client, by topic. In each visualization, the "connections" should all be visible, but projects should be clustered differently depending on the chosen visualization and the name of the type/client/topic should appear next to the "constellation". All project should appear all the time, and when switching between visualizations they should move around, not disappear and reappear.

## Colours
Switch the colours of the main page, using the dark one for background and the light one for text etc.

## Size, etc.
The whole visualization should fit in one window, without scrolling. For mobile, forget about it now, but it will be a question later, so keep it in mind.

## Printable
Prepare a "index_pdf.html" version that is not interactive but instead displays all projects as cards in a very standard way.