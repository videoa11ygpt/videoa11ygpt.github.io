document.addEventListener('DOMContentLoaded', function() {
    let currentVideoIndex = 1; // Start with the first video.
    const totalVideos = 4; // Total number of videos

    function showVideo(index) {
        // Hide all videos and captions first
        for (let i = 1; i <= totalVideos; i++) {
            const video = document.getElementById(`videoPlayer${i}`);
            const caption = document.getElementById(`caption${i}`);
            if (video && caption) {
                video.style.display = 'none';
                caption.style.display = 'none';
            }
        }
        
        // Show only the requested video and caption
        document.getElementById(`videoPlayer${index}`).style.display = 'block';
        document.getElementById(`caption${index}`).style.display = 'block';
        
        // Update button visibility
        updateButtonVisibility(index);
    }

    function updateButtonVisibility(index) {
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        // Hide 'prev' button on the first video, show otherwise
        if (index === 1) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'inline-block'; // or 'block' depending on your layout
        }

        // Hide 'next' button on the last video, show otherwise
        if (index === totalVideos) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'inline-block'; // or 'block'
        }
    }

    document.getElementById('next').addEventListener('click', function() {
        if (currentVideoIndex < totalVideos) {
            currentVideoIndex++;
            showVideo(currentVideoIndex);
        }
    });

    document.getElementById('prev').addEventListener('click', function() {
        if (currentVideoIndex > 1) {
            currentVideoIndex--;
            showVideo(currentVideoIndex);
        }
    });

    // Initialize by showing the first video and setting button visibility
    showVideo(currentVideoIndex);
});
