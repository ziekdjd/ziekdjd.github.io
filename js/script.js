    // Load navigation from external file
    document.addEventListener('DOMContentLoaded', function() {
      const navElement = document.querySelector('nav[source]');
      const navSource = navElement.getAttribute('source');
      
      fetch(navSource)
        .then(response => response.text())
        .then(data => {
          navElement.innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
    });

    // Load projects from external file
    document.addEventListener('DOMContentLoaded', function() {
      const projectsElement = document.querySelector('[source="/source/projects/index.html"]');
      if (projectsElement) {
        fetch('/source/projects/index.html')
          .then(response => response.text())
          .then(data => {
            projectsElement.innerHTML = data;
          })
          .catch(error => console.error('Error loading projects:', error));
      }
    });