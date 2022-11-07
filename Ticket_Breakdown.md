# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1

Backend: Add New CustomId column to agent table

- Description: New column is needed on the agent table to allow for custom Ids to be associated to agents. Should be defaulted to empty if no id is supplied on creation as this is not a required field.

- Acceptance Criteria: All existing and newly created Agent records should have a CustomId field that is defaulted to empty. Get Agent API calls should return this new field as well.

- Effort: 2 points = 2-3 hours implementation and testing

### Ticket 2

Frontend: Include Custom Agent Ids in generated Reports

- Description: Update getShiftsByFacility to return metadata with the new CustomIds field for each agent or just generateReport whichever handles final data pulled in to reports and ensure custom ids are shown with the agent data on the reports.

- Acceptance Criteria: Generated reports should show any custom ids that are in place for agents included in the reports and should be blank for those without custom ids.

- Effort: 2 points = 2-3 hours implementation and testing, update display formatting ...etc

### Ticket 3

Backend/API: Create web portal api hooks for Facilities to update data field for agent CustomIds.

- Description: Our web API needs to updated with new methods for updating, changing, deleting the CustomId field for each Agent Record.

- Acceptance Criteria: Restfull endpoints for the Agent CustomId field should be accessible including Get, Post, Put, and Delete.

- Effort: 3 points = Half Day

### Ticket 4

Frontend: Add Section to Facilities Web Portal for updating CustomIds for agents

- Description: In our Facilities agent manager, ensure the new field is visible. Allow editing of field with a new numerical value and connect it up to the newly created api hooks.

- Acceptance Criteria: CustomId should show up as a field in Facilities agent manager. This field should be editable with a numerical value that can be saved or cleared out. Saving this value should call our new api hooks and update the database. Refreshing this data should show any changes made.

- Effort: 1 Day Implementation + Testing
