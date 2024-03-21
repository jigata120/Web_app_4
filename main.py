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


