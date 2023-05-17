// function getJournal() {
//     return $.getJSON("Journal/journal.json", function(data) { return data; });
// }


function processJournalEntry(newEntry) {
    // Potentially extract image elements from content and replace with a url. 
    // Images will be uploaded seperately to webhost
}

function insertJournalEntry(newEntry) {
    getJournal().done(function(data) {
        data.posts.push(newEntry); // Add the new entry
        updateJournal(data); // Update the JSON file
    });
}

// function updateJournal(updatedData) {
//     $.ajax({
//         url: 'Journal/journal.json',
//         method: 'PUT',
//         data: JSON.stringify(updatedData),
//         contentType: 'application/json',
//         success: function(response) {
//             console.log('Update successful');
//         },
//         error: function(request,msg,error) {
//             console.error('Update failed: ' + error);
//         }
//     });
// }

// Sample usage:
// var newPost = {
//     "title": "<h2>New Post</h2>",
//     "body": "<p>This is a new post.</p>",
//     "images": [
//         {
//             "path": "Journal/img/newImage.jpg",
//             "caption": "This is a new image."
//         }
//     ]
// };
// insertJournalEntry(newPost);
