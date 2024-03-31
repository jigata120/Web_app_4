from googleapiclient.discovery import build
from key import API_KEY

# Replace 'YOUR_API_KEY' with your actual API key
youtube = build('youtube', 'v3', developerKey=API_KEY)

# This example searches for 'Python Tutorial' videos.
request = youtube.search().list(
    q='Python Tutorial',
    part='snippet',
    type='video',
    maxResults=10
)

response = request.execute()

print(response)

from googleapiclient.discovery import build
from key import API_KEY

drive = build('drive', 'v3', developerKey=API_KEY)

# List files in Google Drive
results = drive.files().list(pageSize=10).execute()
items = results.get('files', [])

if not items:
    print('No files found.')
else:
    print('Files:')
    for item in items:
        print(u'{0} ({1})'.format(item['name'], item['id']))

###############################
        from googleapiclient.discovery import build
from key import API_KEY

calendar = build('calendar', 'v3', developerKey=API_KEY)

# List the next 10 events from the primary calendar
events_result = calendar.events().list(calendarId='primary', maxResults=10).execute()
events = events_result.get('items', [])

if not events:
    print('No upcoming events found.')
for event in events:
    start = event['start'].get('dateTime', event['start'].get('date'))
    print(start, event['summary'])
###########################
 from googleapiclient.discovery import build
from key import API_KEY

sheets = build('sheets', 'v4', developerKey=API_KEY)

# Example: Read data from a Google Sheet
sheet_id = 'YOUR_SHEET_ID'
range_name = 'Sheet1!A1:B5'
result = sheets.spreadsheets().values().get(spreadsheetId=sheet_id, range=range_name).execute()
values = result.get('values', [])

if not values:
    print('No data found.')
else:
    print('Name, Age:')
    for row in values:
        print(row[0], row[1])
   