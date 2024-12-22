document.addEventListener('DOMContentLoaded', () => {
    // Get all input elements
    const titleText = document.getElementById('titleText');
    const titleColor = document.getElementById('titleColor');
    const titleSize = document.getElementById('titleSize');
    const contentText = document.getElementById('contentText');
    const contentColor = document.getElementById('contentColor');
    const contentSize = document.getElementById('contentSize');
    const bgColor = document.getElementById('bgColor');
    const addButton = document.getElementById('addSection');
    const contentContainer = document.getElementById('contentContainer');

    // Function to create new content section
    function createContentSection() {
        const section = document.createElement('div');
        section.className = 'content-section';
        
        // Apply background color
        section.style.backgroundColor = bgColor.value;

        // Create title
        const title = document.createElement('h2');
        title.className = 'content-title';
        title.textContent = titleText.value || 'Untitled Section';
        title.style.color = titleColor.value;
        title.style.fontSize = `${titleSize.value}px`;

        // Create content
        const content = document.createElement('div');
        content.className = 'content-text';
        content.textContent = contentText.value || 'Add your content here...';
        content.style.color = contentColor.value;
        content.style.fontSize = `${contentSize.value}px`;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '×';
        deleteBtn.onclick = () => section.remove();

        // Append elements
        section.appendChild(deleteBtn);
        section.appendChild(title);
        section.appendChild(content);

        // Add to container
        contentContainer.appendChild(section);

        // Clear inputs
        titleText.value = '';
        contentText.value = '';
    }

    // Add section when button is clicked
    addButton.addEventListener('click', createContentSection);

    // Live preview updates
    function updatePreview() {
        const previewSection = contentContainer.lastElementChild;
        if (previewSection) {
            previewSection.style.backgroundColor = bgColor.value;
            const title = previewSection.querySelector('.content-title');
            const content = previewSection.querySelector('.content-text');

            if (title) {
                title.textContent = titleText.value || 'Untitled Section';
                title.style.color = titleColor.value;
                title.style.fontSize = `${titleSize.value}px`;
            }

            if (content) {
                content.textContent = contentText.value || 'Add your content here...';
                content.style.color = contentColor.value;
                content.style.fontSize = `${contentSize.value}px`;
            }
        }
    }

    // Add input event listeners for live preview
    const inputs = [titleText, titleColor, titleSize, contentText, contentColor, contentSize, bgColor];
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    // Initialize with a blank section
    createContentSection();
});