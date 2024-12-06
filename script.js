// Import Three.js
import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";



// Get modal elements
var projectDetailModal = document.getElementById("projectDetailModal");
var projectIcon = document.getElementById("projectIcon");
var projectTitle = document.getElementById("projectTitle");
var projectLocation = document.getElementById("projectLocation");
var projectDate = document.getElementById("projectDate");
var projectClient = document.getElementById("projectClient");
var projectTypology = document.getElementById("projectTypology");
var projectImage = document.getElementById("projectImage");

// Get link elements in the modal
var presentationLink = document.getElementById("presentationLink");
var visualsLink = document.getElementById("visualsLink");
var animationLink = document.getElementById("animationLink");
var drawingsLink = document.getElementById("drawingsLink");
var threeDModelLink = document.getElementById("3DModelLink");
var homePageLink = document.getElementById("homePageLink");
// Function to update project links

document.querySelectorAll('.project-box').forEach((box) => {
    box.addEventListener('click', function () {
        // Retrieve project-specific data
        const title = this.getAttribute('data-title');
        const location = this.getAttribute('data-location');
        const date = this.getAttribute('data-date');
        const client = this.getAttribute('data-client');
        const typology = this.getAttribute('data-typology');


        // Set the basic project information
        projectTitle.textContent = title || 'Untitled Project';
        projectLocation.textContent = location || 'Unknown Location';
        projectDate.textContent = date || 'No Date Provided';
        projectClient.textContent = client || 'No Client Specified';
        projectTypology.textContent = typology || 'Unknown Typology';

        // Set the project icon and main image
        projectIcon.src = this.getAttribute('data-icon') || 'default-icon.png';
        projectImage.src = this.querySelector('.hover-image')?.src || 'default-image.png';

// MODIFICATION: Ensure links are correctly set for ALL project types

        // Update Project Links
        const projectLinksContainer = document.querySelector('.project-links');
        if (projectLinksContainer) {
            // Clear existing links
            projectLinksContainer.innerHTML = '';

            // Create containers
            const homeLinkContainer = document.createElement('div');
            homeLinkContainer.className = 'home-link';
            const otherLinksContainer = document.createElement('div');
            otherLinksContainer.className = 'other-links';

            // Define links configuration
            const links = [
                { url: "javascript:void(0)", icon: "images.png", action: "close", isHome: true },
                { url: this.getAttribute('data-3dmodel-link'), icon: this.getAttribute('data-3dmodel-icon'), type: "3D Model" },
                { url: this.getAttribute('data-drawings-link'), icon: this.getAttribute('data-drawings-icon'), type: "Drawings" },
                { url: this.getAttribute('data-animation-link'), icon: this.getAttribute('data-animation-icon'), type: "Animation" },
                { url: this.getAttribute('data-visuals-link'), icon: this.getAttribute('data-visuals-icon'), type: "Visuals" },
                { url: this.getAttribute('data-presentation-link'), icon: this.getAttribute('data-presentation-icon'), type: "Presentation" }
            ];

            // Create and append links
            links.forEach(({ url, icon, action, isHome, type }) => {
                if (url || action === "close") {
                    const linkElement = document.createElement('a');
                    linkElement.href = url || 'javascript:void(0)';
                    linkElement.target = action === "close" ? "" : "_blank";

                    if (isHome) {
                        linkElement.textContent = 'HOME';
                        linkElement.onclick = closeProjectDetail;
                        linkElement.classList.add('home-link');
                        homeLinkContainer.appendChild(linkElement);
                    } else if (url) {
                        linkElement.innerHTML = `<img src="${icon || `default-${type.toLowerCase()}-icon.png`}" alt="${type} Icon">`;
                        otherLinksContainer.appendChild(linkElement);
                    }
                }
            });

            // Append containers
            projectLinksContainer.appendChild(homeLinkContainer);
            projectLinksContainer.appendChild(otherLinksContainer);
        }

        // Load gallery images
        const imageGallery = document.getElementById('imageGallery');
        imageGallery.innerHTML = ''; // Clear previous images
        const images = JSON.parse(this.getAttribute('data-images') || '[]');
        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = "Project Image";
            imageGallery.appendChild(img);
        });

       // Get the team member data
       const team = JSON.parse(this.getAttribute('data-team') || '[]');
        
       // Create a single string with all team members separated by commas
       const teamMemberNames = team.join(', ');

       // Set the content of the paragraph
       const teamMemberParagraph = document.getElementById('teamMemberNames');
       teamMemberParagraph.textContent = teamMemberNames;

       // Show or hide the team section based on whether there are team members

        // Retrieve project-specific data for new-page-content
        const projectNewImage = this.getAttribute('data-new-image') || 'default-image.png';
        const paragraph1 = this.getAttribute('data-paragraph1') || 'Default project description.';
        const paragraph2 = this.getAttribute('data-paragraph2') || 'Default project description.';
        const paragraph3 = this.getAttribute('data-paragraph3') || 'Default project description.';


        const projectNewText = this.getAttribute('data-new-text') || 'Default project description.';

        // Update the new-page-content section
        const newPageContent = document.querySelector('.new-page-content');
        const newPageImage = newPageContent.querySelector('.new-page-image');
        const newPageText = newPageContent.querySelector('.text-container');

        // Set the new image and new text
        newPageImage.src = projectNewImage;
        newPageText.textContent = projectNewText;
        // Dynamically create and insert the paragraphs
        newPageText.innerHTML = `
                <p>${paragraph1}</p>
                <p>${paragraph2}</p>
                <p>${paragraph3}</p>
                `;
        // Display the modal
        projectDetailModal.style.display = "block";
    });
    
});
window.closeProjectDetail = function () {
    const projectDetailModal = document.getElementById("projectDetailModal");
    if (projectDetailModal) {
        // Reset the scroll position to the top
        projectDetailModal.scrollTop = 0;

        // Optionally clear dynamic content if needed
        document.getElementById("teamMemberNames").textContent = "";
        document.getElementById("imageGallery").innerHTML = "";
        document.querySelector('.text-container').innerHTML = "";

        // Hide the modal
        projectDetailModal.style.display = "none";
    } else {
        console.error("Project Detail Modal not found.");
    }
};

function updateProjectLinks(projectBox) {
    // Get project links container

        // Update Project Links
        const projectLinksContainer = document.querySelector('.project-links');
        if (projectLinksContainer) {
            // Clear existing links
            projectLinksContainer.innerHTML = '';

            // Create containers
            const homeLinkContainer = document.createElement('div');
            homeLinkContainer.className = 'home-link';
            const otherLinksContainer = document.createElement('div');
            otherLinksContainer.className = 'other-links';

            // Define links configuration
            const links = [
                { url: "javascript:void(0)", icon: "images.png", action: "close", isHome: true },
                { url: this.getAttribute('data-3dmodel-link'), icon: this.getAttribute('data-3dmodel-icon'), type: "3D Model" },
                { url: this.getAttribute('data-drawings-link'), icon: this.getAttribute('data-drawings-icon'), type: "Drawings" },
                { url: this.getAttribute('data-animation-link'), icon: this.getAttribute('data-animation-icon'), type: "Animation" },
                { url: this.getAttribute('data-visuals-link'), icon: this.getAttribute('data-visuals-icon'), type: "Visuals" },
                { url: this.getAttribute('data-presentation-link'), icon: this.getAttribute('data-presentation-icon'), type: "Presentation" }
            ];

            // Create and append links
            links.forEach(({ url, icon, action, isHome, type }) => {
                if (url || action === "close") {
                    const linkElement = document.createElement('a');
                    linkElement.href = url || 'javascript:void(0)';
                    linkElement.target = action === "close" ? "" : "_blank";

                    if (isHome) {
                        linkElement.textContent = 'HOME';
                        linkElement.onclick = closeProjectDetail;
                        linkElement.classList.add('home-link');
                        homeLinkContainer.appendChild(linkElement);
                    } else if (url) {
                        linkElement.innerHTML = `<img src="${icon || `default-${type.toLowerCase()}-icon.png`}" alt="${type} Icon">`;
                        otherLinksContainer.appendChild(linkElement);
                    }
                }
            });

            // Append containers
            projectLinksContainer.appendChild(homeLinkContainer);
            projectLinksContainer.appendChild(otherLinksContainer);
        }
    }

function addClickEventToProjectBox(projectBox) {
    projectBox.addEventListener('click', function () {
        // Retrieve project-specific data
        const title = this.getAttribute('data-title') || 'Untitled Project';
        const location = this.getAttribute('data-location') || 'Unknown Location';
        const date = this.getAttribute('data-date') || 'No Date Provided';
        const client = this.getAttribute('data-client') || 'No Client Specified';
        const typology = this.getAttribute('data-typology') || 'Unknown Typology';
        
        // Set Project Title and Details
        document.getElementById('projectTitle').textContent = title;
        document.getElementById('projectLocation').textContent = location;
        document.getElementById('projectDate').textContent = date;
        document.getElementById('projectClient').textContent = client;
        document.getElementById('projectTypology').textContent = typology;

        // Project Icon
        const projectSymbol = document.getElementById('projectIcon');
        const iconURL = this.getAttribute('data-icon') || 'default-icon.png';
        if (projectSymbol) {
            projectSymbol.src = iconURL;
            projectSymbol.style.display = 'block';
        }

        // Project Image in Description
        const hoverImage = this.querySelector('.hover-image');
        const projectImageSection = document.getElementById('projectImage');
        if (hoverImage && projectImageSection) {
            projectImageSection.src = hoverImage.src;
            projectImageSection.style.display = 'block';
        }

        // New Page Image
        const newImage = this.getAttribute('data-new-image') || 'default-new-image.png';
        const newPageImage = document.querySelector('.new-page-image');
        if (newPageImage) {
            newPageImage.src = newImage;
            newPageImage.style.display = 'block';
        }

        // New Page Text
        const paragraph1 = this.getAttribute('data-paragraph1') || '';
        const paragraph2 = this.getAttribute('data-paragraph2') || '';
        const paragraph3 = this.getAttribute('data-paragraph3') || '';
        const newPageText = document.querySelector('.text-container');
        if (newPageText) {
            newPageText.innerHTML = `
                <p>${paragraph1}</p>
                <p>${paragraph2}</p>
                <p>${paragraph3}</p>
            `;
        }

        // Team Names
        const teamData = JSON.parse(this.getAttribute('data-team') || '[]');
        const teamSection = document.getElementById('teamMemberNames');
        if (teamSection) {
            teamSection.textContent = teamData.length
                ? teamData.join(', ')
                : 'No team members available.';
        }


        // Update Project Links
        const projectLinksContainer = document.querySelector('.project-links');
        if (projectLinksContainer) {
            // Clear existing links
            projectLinksContainer.innerHTML = '';

            // Create containers
            const homeLinkContainer = document.createElement('div');
            homeLinkContainer.className = 'home-link';
            const otherLinksContainer = document.createElement('div');
            otherLinksContainer.className = 'other-links';

            // Define links configuration
            const links = [
                { url: "javascript:void(0)", icon: "images.png", action: "close", isHome: true },
                { url: this.getAttribute('data-3dmodel-link'), icon: this.getAttribute('data-3dmodel-icon'), type: "3D Model" },
                { url: this.getAttribute('data-drawings-link'), icon: this.getAttribute('data-drawings-icon'), type: "Drawings" },
                { url: this.getAttribute('data-animation-link'), icon: this.getAttribute('data-animation-icon'), type: "Animation" },
                { url: this.getAttribute('data-visuals-link'), icon: this.getAttribute('data-visuals-icon'), type: "Visuals" },
                { url: this.getAttribute('data-presentation-link'), icon: this.getAttribute('data-presentation-icon'), type: "Presentation" }
            ];

            // Create and append links
            links.forEach(({ url, icon, action, isHome, type }) => {
                if (url || action === "close") {
                    const linkElement = document.createElement('a');
                    linkElement.href = url || 'javascript:void(0)';
                    linkElement.target = action === "close" ? "" : "_blank";

                    if (isHome) {
                        linkElement.textContent = 'HOME';
                        linkElement.onclick = closeProjectDetail;
                        linkElement.classList.add('home-link');
                        homeLinkContainer.appendChild(linkElement);
                    } else if (url) {
                        linkElement.innerHTML = `<img src="${icon || `default-${type.toLowerCase()}-icon.png`}" alt="${type} Icon">`;
                        otherLinksContainer.appendChild(linkElement);
                    }
                }
            });

            // Append containers
            projectLinksContainer.appendChild(homeLinkContainer);
            projectLinksContainer.appendChild(otherLinksContainer);
        }
        
        // Load gallery images
        const imageGallery = document.getElementById('imageGallery');
        imageGallery.innerHTML = '';
        const images = JSON.parse(this.getAttribute('data-images') || '[]');
        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = "Project Image";
            imageGallery.appendChild(img);
        });

        // Show the modal
        const projectDetailModal = document.getElementById('projectDetailModal');
        if (projectDetailModal) {
            projectDetailModal.style.display = "block";
        }
    });
}


function sortProjects(criteria) {
    const gallery = document.querySelector('.symbol-grid');
    const yearColumns = Array.from(gallery.getElementsByClassName('year-column'));
    const epochHeader = document.getElementById('epochTimeline'); // Add epoch header reference
    const timelineHeader = document.querySelector('.timeline-header');
    const alphabeticalHeader = document.querySelector('.alphabetical-header');
    const programmaticHeader = document.querySelector('.programmatic-header');
    const scaleHeader = document.querySelector('.scale-header'); // Added scale header reference
    const globeContainerId = 'globe-container';
    

        // Enhanced clearDynamicElements function
        function clearDynamicElements() {
            // Remove all project markers
            document.querySelectorAll('.project-globe-marker').forEach(marker => marker.remove());
            
            // Remove existing globe container
            const existingGlobeContainer = document.getElementById('globe-container');
            if (existingGlobeContainer) {
                existingGlobeContainer.remove();
            }

            // Clear the locations array
            if (window.locations) {
                window.locations.forEach(location => {
                    location.projects = []; // Reset projects array for each location
                });
            }
        }
            
        if (criteria === 'alphabetical') {
            // Hide the timeline header and show the alphabetical header
            timelineHeader.style.display = 'none';
            alphabeticalHeader.style.display = 'grid';
            programmaticHeader.style.display = 'none';
            scaleHeader.style.display = 'none';
            epochHeader.style.display = 'none'; // Hide epoch
        
            // Hide or remove the globe container
            const globeContainer = document.getElementById('globe-container');
            if (globeContainer) {
                globeContainer.style.display = 'none'; // Hide the globe
            }
        
            // Hide the year columns but keep them in the DOM for later restoration
            yearColumns.forEach(yearColumn => yearColumn.style.display = 'none');
        
            // Clear previous content in each alphabetical section
            alphabeticalHeader.querySelectorAll('.alphabet-label').forEach(label => {
                label.innerHTML = label.getAttribute('data-letter'); // Reset to just the letter
            });
        
            // Collect and sort all project boxes by alphabetical order of the symbol name
            let projectBoxes = [];
            yearColumns.forEach(yearColumn => {
                yearColumn.querySelectorAll('.project-box').forEach(projectBox => {
                    const clonedProject = projectBox.cloneNode(true);
                    projectBoxes.push(clonedProject); // Clone each project box for alphabetical
                    addClickEventToProjectBox(clonedProject); // Attach click event to each cloned project box
                });
            });
        
            projectBoxes.sort((a, b) => {
                const nameA = a.querySelector('.symbol-name')?.textContent.trim().toUpperCase();
                const nameB = b.querySelector('.symbol-name')?.textContent.trim().toUpperCase();
                return nameA.localeCompare(nameB);
            });
        
            projectBoxes.forEach(projectBox => {
                const symbolName = projectBox.querySelector('.symbol-name')?.textContent.trim();
                const firstChar = symbolName?.charAt(0); // Get the first character
                
                // Determine the section: # for numbers, else the uppercase letter
                const firstLetter = isNaN(firstChar) || /[^\w]/.test(firstChar) ? '#' : firstChar?.toUpperCase();
            
                // Find the corresponding alphabetical section
                const alphabetSection = alphabeticalHeader.querySelector(`.alphabet-label[data-letter="${firstLetter}"]`);
                if (alphabetSection) {
                    const clonedProject = projectBox.cloneNode(true);
                    
                    // Copy all data attributes explicitly
                    Array.from(projectBox.attributes).forEach(attr => {
                        clonedProject.setAttribute(attr.name, attr.value);
                    });
            
                    addClickEventToProjectBox(clonedProject); // Attach click event
                    alphabetSection.appendChild(clonedProject);
                }
            });
            
        
            reattachTooltipEvents(); // Ensure tooltips and other events are correctly reattached
        
        
        sortAndDistributeAlphabeticalProjects();


    } else if (criteria === 'location') {
        // Clear everything first
        clearDynamicElements();

        // Step 2: Hide other views
        timelineHeader.style.display = 'none';
        alphabeticalHeader.style.display = 'none';
        scaleHeader.style.display = 'none';
        epochHeader.style.display = 'none';
        programmaticHeader.style.display = 'none';
        yearColumns.forEach(yearColumn => yearColumn.style.display = 'none');
    
          // Step 3: Remove existing globe container
        let existingGlobeContainer = document.getElementById('globe-container');
        if (existingGlobeContainer) {
            existingGlobeContainer.remove();
        }
        // Step 4: Create a new globe container
        const main = document.querySelector('main');
        const globeContainer = document.createElement('div');
        globeContainer.id = 'globe-container';
        main.appendChild(globeContainer);

        // Style the globe container
        globeContainer.style.position = 'absolute';
        globeContainer.style.top = '50%';
        globeContainer.style.left = '50%';
        globeContainer.style.bottom = '50%';
        globeContainer.style.transform = 'translate(-50%, -50%)';
        globeContainer.style.width = '960px';
        globeContainer.style.height = '800px';
        globeContainer.style.background = 'white';
        globeContainer.style.overflow = 'hidden';
    
  
        // Step 5: Initialize Three.js globe
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, globeContainer.clientWidth / globeContainer.clientHeight, 0.1, 1000);
        camera.position.z =  18;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(globeContainer.clientWidth, globeContainer.clientHeight);
        globeContainer.appendChild(renderer.domElement);
    
        // Create globe geometry and material
        const geometry = new THREE.SphereGeometry(7, 49, 49);
        const textureLoader = new THREE.TextureLoader();
        const globeTexture = textureLoader.load('./fs-globe-image-10.jpg');
        const material = new THREE.MeshBasicMaterial({ map: globeTexture });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);
    
        // Add OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.008;
        controls.enableZoom = true;
        // Restrict zoom to allow only a little zoom in and out
        controls.enableZoom = true;
        controls.minDistance = 15; // Set this to a value slightly closer than the initial camera distance
        controls.maxDistance = 20; // Set this to a value slightly farther than the initial camera distance
            
        window.locations = [
            { name: "KSA, SAUDI ARABIA", lat: 23.8859, lon: 45.0792, projects: [] },
            { name: "DUBAI, UAE", lat: 25.276987, lon: 55.296249, projects: [] },
            { name: "ABU DHABI, UAE", lat: 24.453884, lon: 54.377343, projects: [] },
            { name: "QATAR", lat: 25.276987, lon: 51.520008, projects: [] },
            { name: "MOROCCO", lat: 31.7917, lon: -7.0926, projects: [] },
            { name: "BAHRAIN", lat: 26.0667, lon: 50.5577, projects: [] } // Added Bahrain
        ];
    
      // Create a Set to track processed projects
      const processedProjects = new Set();

      // Process projects only once
      document.querySelectorAll('.project-box').forEach(projectBox => {
          const projectId = projectBox.getAttribute('data-project'); // Unique identifier
          const projectLocation = projectBox.getAttribute('data-location');

          // Skip if already processed
          if (processedProjects.has(projectId)) return;

          const matchingLocation = window.locations.find(loc => 
              loc.name.toLowerCase() === projectLocation.toLowerCase()
          );

          if (matchingLocation) {
              matchingLocation.projects.push(projectBox);
              processedProjects.add(projectId);
          }
      });
    
      function latLonToCartesian(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);    
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);
    
        return { x, y, z };
    }
    
            // Step 7: Add markers and icons for projects
            const markerGeometry = new THREE.SphereGeometry(0.1, 10, 10);
            const markerMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
            window.locations.forEach(location => {
                const position = latLonToCartesian(location.lat, location.lon, 7);
                
               // Create a marker as a plane
                const markerGeometry = new THREE.PlaneGeometry(0.1, 0.1);
                const markerMaterial = new THREE.MeshBasicMaterial({ 
                    color: 'red', 
                    side: THREE.DoubleSide // Ensures visibility from both sides
                });
                const marker = new THREE.Mesh(markerGeometry, markerMaterial);
                // Position marker on the globe surface
                marker.position.set(position.x, position.y, position.z);
                
                // Fix rotation to face outward
                // Fix rotation to align perpendicular to the globe
                const normal = new THREE.Vector3(position.x, position.y, position.z).normalize();
                // Align marker to face outward perpendicular to the globe surface
                const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
                marker.quaternion.copy(quaternion);

                // Add the marker to the globe
                globe.add(marker);

                location.projects.forEach((projectBox, index) => {
                    // Original project icon code remains the same
                    const iconDiv = document.createElement('div');
                    iconDiv.classList.add('project-globe-marker');
                    iconDiv.style.position = 'absolute';
                    iconDiv.style.width = '30px';
                    iconDiv.style.height = '30px';
                    iconDiv.style.backgroundImage = `url(${projectBox.getAttribute('data-icon')})`;
                    iconDiv.style.backgroundSize = 'cover';
                    iconDiv.style.cursor = 'pointer';
                    iconDiv.style.zIndex = 1000 + index;
                    iconDiv.classList.add('project-globe-marker');
                    iconDiv.setAttribute('data-title', projectBox.getAttribute('data-title'));
                    iconDiv.setAttribute('data-location', projectBox.getAttribute('data-location'));
                    iconDiv.setAttribute('data-highrise', projectBox.getAttribute('data-highrise'));
                    iconDiv.setAttribute('data-award', projectBox.getAttribute('data-award'));
                                        
                        // Add the hover image
                    const hoverImageDiv = document.createElement('img');
                    const hoverImage = projectBox.querySelector('.hover-image');
                    if (hoverImage) {
                        hoverImageDiv.src = hoverImage.src;
                    }
                    hoverImageDiv.classList.add('hover-image');
                    hoverImageDiv.style.position = 'absolute';
                    hoverImageDiv.style.display = 'none';
                    hoverImageDiv.style.width = '50px'; // Increased size for better visibility
                    hoverImageDiv.style.height = '50px';
                    hoverImageDiv.style.transform = 'translate(-50%, -100%)'; // Position above the icon
                    hoverImageDiv.style.top = '40px'; // Offset from the icon
                    hoverImageDiv.style.zIndex = '2000'; // Higher z-index to ensure visibility
                    iconDiv.appendChild(hoverImageDiv);

                    // Tooltip creation
                    const tooltip = document.createElement('div');
                    tooltip.classList.add('tooltip');
                    tooltip.textContent = projectBox.getAttribute('data-title') || 'Untitled Project';
                    document.body.appendChild(tooltip);

                    // Show tooltip and hover image on hover
                    iconDiv.addEventListener('mouseenter', (event) => {
                        tooltip.textContent = projectBox.getAttribute('data-title') || 'Untitled Project';
                        tooltip.style.display = 'block';
                        hoverImageDiv.style.display = 'block';
                    });

                    iconDiv.addEventListener('mousemove', (event) => {
                        tooltip.style.left = `${event.pageX + 10}px`;
                        tooltip.style.top = `${event.pageY + 10}px`;
                        // Remove the line that hides the hover image
                    });

                    iconDiv.addEventListener('mouseleave', () => {
                        tooltip.style.display = 'none';
                        hoverImageDiv.style.display = 'none';
                    });
                
                    iconDiv.addEventListener('click', () => projectBox.click());
                    globeContainer.appendChild(iconDiv);
                
    
                    function updateIconPosition() {
                        // Get the world position of the marker
                        const markerPosition = marker.getWorldPosition(new THREE.Vector3());
                    
                        // Calculate the normal vector (from the center of the globe to the marker position)
                        const markerNormal = markerPosition.clone().normalize();
                    
                        // Calculate the camera's view direction vector
                        const cameraVector = camera.position.clone().normalize();
                    
                        // Dot product to check if the marker is on the visible side of the globe
                        const dotProduct = markerNormal.dot(cameraVector);
                    
                        if (dotProduct < 0) {
                            // Icon is on the far side of the globe
                            iconDiv.style.display = 'none';
                            return;
                        }
                    
                        // Stacking icons: Offset each icon slightly along the normal vector
                        const stackedPosition = markerPosition.clone().add(markerNormal.multiplyScalar(index * 0.15));
                    
                        // Convert the stacked 3D position to 2D screen coordinates
                        const screenPosition = stackedPosition.project(camera);
                    
                        // Check if the icon is within the visible screen bounds
                        if (
                            screenPosition.z < -1 || screenPosition.z > 1 ||
                            screenPosition.x < -1 || screenPosition.x > 1 ||
                            screenPosition.y < -1 || screenPosition.y > 1
                        ) {
                            iconDiv.style.display = 'none';
                            return;
                        }
                    
                        // Icon is visible: Calculate its position on the screen
                        iconDiv.style.display = 'block';
                        const x = (screenPosition.x * 0.5 + 0.5) * globeContainer.clientWidth;
                        const y = (-screenPosition.y * 0.5 + 0.5) * globeContainer.clientHeight;
                    
                        // Position the icon with a transform to center it
                        iconDiv.style.transform = `translate(-50%, -50%)`;
                        iconDiv.style.left = `${x}px`;
                        iconDiv.style.top = `${y}px`;
                    }
                    
    
                function animateIcons() {
                    requestAnimationFrame(animateIcons);
                    updateIconPosition();
                }
                animateIcons();
            });
        });
    
        function animate() {
            requestAnimationFrame(animate);
            globe.rotation.y -= 0.0001;
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    
        window.addEventListener('resize', () => {
            const newWidth = globeContainer.clientWidth;
            const newHeight = globeContainer.clientHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        });
    }

    else if (criteria === 'epoch') {
            // Hide other headers
            timelineHeader.style.display = 'none';
            alphabeticalHeader.style.display = 'none';
            programmaticHeader.style.display = 'none';
            scaleHeader.style.display = 'none';

        
            // Show the epoch view
            epochHeader.style.display = 'flex';
        
               // Hide or remove the globe container
            const globeContainer = document.getElementById('globe-container');
            if (globeContainer) {
                globeContainer.style.display = 'none'; // Hide the globe
            }
            // Clear all content in the project subcolumns
            const epochProjects = document.querySelector('.epoch-projects');
            epochProjects.querySelectorAll('.epoch-label').forEach(label => {
                label.querySelectorAll('.sub-column').forEach(subColumn => {
                    subColumn.innerHTML = ''; // Clear existing projects
                });
            });
        
            // Create a Set to track added projects
            const addedProjects = new Set();
        
            // Distribute projects into epoch subcolumns
            document.querySelectorAll('.project-box').forEach(projectBox => {
                const projectId = projectBox.getAttribute('data-project'); // Unique identifier
                const projectEpoch = projectBox.getAttribute('data-epoch');
                const epochLabel = epochProjects.querySelector(`.epoch-label[data-epoch="${projectEpoch}"]`);
        
                // Skip if the project has already been added
                if (!epochLabel || addedProjects.has(projectId)) return;
        
                const subColumns = epochLabel.querySelectorAll('.sub-column');
                const leastFilledColumn = Array.from(subColumns).reduce(
                    (minCol, col) =>
                        col.children.length < minCol.children.length ? col : minCol,
                    subColumns[0]
                );
        
                // Clone project box and add click events
                const clonedProject = projectBox.cloneNode(true);
                leastFilledColumn.appendChild(clonedProject);
                addClickEventToProjectBox(clonedProject);
        
                // Mark the project as added
                addedProjects.add(projectId);
            });
        
            // Hide all year columns initially
            yearColumns.forEach(yearColumn => {
                yearColumn.style.display = 'none';
            });
            
        
            reattachTooltipEvents(); // Reattach tooltips after sorting
            sortAndDistributeEpochProjects();

    }
  
    else if (criteria === 'programmatic') {
        // Show the programmatic header and hide others
        timelineHeader.style.display = 'none';
        alphabeticalHeader.style.display = 'none';
        scaleHeader.style.display = 'none';
        epochHeader.style.display = 'none';
        programmaticHeader.style.display = 'flex';
    
        // Hide or remove the globe container
        const globeContainer = document.getElementById('globe-container');
        if (globeContainer) {
            globeContainer.style.display = 'none'; // Hide the globe
        }
    
        // Hide the year columns
        const yearColumns = document.querySelectorAll('.year-column');
        yearColumns.forEach(yearColumn => {
            yearColumn.style.display = 'none'; // Hide the year columns completely
        });
    
        // Clear all content in the programmatic section
        const programmaticProjects = document.querySelector('.programmatic-projects');
        programmaticProjects.querySelectorAll('.programmatic-label').forEach(label => {
            label.querySelectorAll('.sub-column').forEach(subColumn => {
                subColumn.innerHTML = ''; // Clear existing content
            });
        });
    
        // Use a Set to track added projects
        const addedProjects = new Set();
    
        // Group projects by category and epoch
        document.querySelectorAll('.project-box').forEach(projectBox => {
            const projectId = projectBox.getAttribute('data-project'); // Unique identifier
            const projectCategory = projectBox.getAttribute('data-tags');
            const projectEpoch = projectBox.getAttribute('data-epoch');
            const categoryLabel = programmaticProjects.querySelector(`.programmatic-label[data-category="${projectCategory}"]`);
    
            if (!categoryLabel || addedProjects.has(projectId)) return; // Skip duplicates
    
            let targetSubColumn;
    
            // Assign projects to sub-columns based on epoch
            if (projectEpoch === 'Past') {
                targetSubColumn = categoryLabel.querySelector('.sub-column[data-category-sub="1"]');
            } else if (projectEpoch === 'Present') {
                targetSubColumn = categoryLabel.querySelector('.sub-column[data-category-sub="2"]');
            } else if (projectEpoch === 'Future') {
                targetSubColumn = categoryLabel.querySelector('.sub-column[data-category-sub="3"]');
            }
    
            if (targetSubColumn) {
                // Clone the project box and append it
                const clonedProject = projectBox.cloneNode(true);
                targetSubColumn.appendChild(clonedProject);
    
                // Add to Set to prevent duplication
                addedProjects.add(projectId);
    
                // Reattach hover and click events
                addClickEventToProjectBox(clonedProject);
            }
        });
    
        // Reattach tooltips or any additional events
        reattachTooltipEvents();
    }
    
        
     else if (criteria === 'scale') {
        // Hide other headers
        timelineHeader.style.display = 'none';
        alphabeticalHeader.style.display = 'none';
        programmaticHeader.style.display = 'none';
        epochHeader.style.display = 'none';
        scaleHeader.style.display = 'flex'; // Show scale header

       // Hide or remove the globe container
       const globeContainer = document.getElementById('globe-container');
       if (globeContainer) {
           globeContainer.style.display = 'none'; // Hide the globe
       }
        // Clear all content in the project subcolumns
        const scaleProjects = document.querySelector('.scale-projects');
        scaleProjects.querySelectorAll('.scale-label').forEach(label => {
            label.querySelectorAll('.sub-column').forEach(subColumn => {
                subColumn.innerHTML = ''; // Clear existing projects
            });
        });
    
        // Create a Set to track added projects
        const addedProjects = new Set();
    
        // Distribute projects into scale subcolumns
        document.querySelectorAll('.project-box').forEach(projectBox => {
            const projectId = projectBox.getAttribute('data-project'); // Unique identifier
            const projectScale = projectBox.getAttribute('data-scale');
            const scaleLabel = scaleProjects.querySelector(`.scale-label[data-scale="${projectScale}"]`);
    
            // Skip if the project has already been added
            if (!scaleLabel || addedProjects.has(projectId)) return;
    
            const subColumns = scaleLabel.querySelectorAll('.sub-column');
            const leastFilledColumn = Array.from(subColumns).reduce(
                (minCol, col) =>
                    col.children.length < minCol.children.length ? col : minCol,
                subColumns[0]
            );
    
            // Clone project box and add click events
            const clonedProject = projectBox.cloneNode(true);
            leastFilledColumn.appendChild(clonedProject);
            addClickEventToProjectBox(clonedProject);
    
            // Mark the project as added
            addedProjects.add(projectId);
        });
    
        // Hide all year columns initially
        yearColumns.forEach(yearColumn => {
            yearColumn.style.display = 'none';
        });
    
        reattachTooltipEvents(); // Reattach tooltips after sorting
        sortAndDistributeScaleProjects();

    
    }
    
    else {
            // Show only the timeline header
            timelineHeader.style.display = 'grid';
            alphabeticalHeader.style.display = 'none';
            programmaticHeader.style.display = 'none';
            scaleHeader.style.display = 'none';
            epochHeader.style.display = 'none'; // Ensure epoch header is hidden
        
            // Restore year columns for chronological view
            yearColumns.forEach(yearColumn => {
                yearColumn.style.display = 'flex';
                gallery.appendChild(yearColumn); // Restore original order in the DOM
            });
        
            // Hide the globe container if it exists
            const globeContainer = document.getElementById('globe-container');
            if (globeContainer) {
                globeContainer.style.display = 'none';
            }
    }
        
     };


function setActiveButton(button) {
    const buttons = document.querySelectorAll('.sorting-bar button');
    buttons.forEach(btn => btn.classList.remove('active')); // Remove 'active' from all buttons
    button.classList.add('active'); // Add 'active' to the clicked button
}


// Create the tooltip element
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

// Handle mouse hover and move for project symbols
document.querySelectorAll('.project-box').forEach((box) => {
    box.addEventListener('mouseenter', function () {
        const title = this.getAttribute('data-title') || 'Untitled Project';
        tooltip.textContent = title;
        tooltip.style.display = "block";
    });

    box.addEventListener('mousemove', function (event) {
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    box.addEventListener('mouseleave', function () {
        tooltip.style.display = "none";
    });
});
function reattachTooltipEvents() {
    const tooltip = document.querySelector(".tooltip");

    document.querySelectorAll('.project-box').forEach((box) => {
        box.addEventListener('mouseenter', function () {
            const title = this.getAttribute('data-title') || 'Untitled Project';
            tooltip.textContent = title;
            tooltip.style.display = "block";
        });

        box.addEventListener('mousemove', function (event) {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        box.addEventListener('mouseleave', function () {
            tooltip.style.display = "none";
        });
    });
}
function updateModal(projectBox) {
    const newImage = projectBox.getAttribute('data-new-image');
    if (newImage) {
        projectImage.src = newImage;
        console.log('Modal image updated to:', newImage);
    } else {
        console.error('Missing data-new-image for project:', projectBox);
    }
}

// Add location container to the containers object
const containers = {
    chronological: '.symbol-grid',
    epoch: '.epoch-projects',
    alphabetical: '.alphabetical-header',
    programmatic: '.programmatic-projects',
    scale: '.scale-projects',
    location: '#globe-container' // Add this line
};

document.addEventListener("DOMContentLoaded", function () {
    const mainSearchInput = document.getElementById("mainSearchInput");
    const searchContent = document.getElementById("searchContent");

    // List of predefined keywords for auto-fill
    const suggestions = ["HIGH-RISE", "AWARDED", "CULTURAL", "RESIDENTIAL", "HOSPITALITY"];

    mainSearchInput.addEventListener("input", function (event) {
        const query = mainSearchInput.value.toLowerCase();
        updateSearchResults(query);
    });

    // Ensure cursor position is correct when typing or using auto-fill
    mainSearchInput.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" || event.key === "Delete") {
            // Allow editing without forcing auto-fill
            mainSearchInput.setSelectionRange(mainSearchInput.value.length, mainSearchInput.value.length);
        }
    });

   function updateSearchResults(query) {
        searchContent.innerHTML = "";
        searchContent.style.display = query ? "block" : "none";

        const globeContainer = document.getElementById('globe-container');
        const isLocationView = globeContainer && globeContainer.style.display !== 'none';

        let hasMatch = false;
        const displayedTitles = new Set();
        const displayedKeywords = new Set();
        const matchingProjects = new Set();

        // Handle search across all project boxes first
        document.querySelectorAll('.project-box').forEach(box => {
            const title = box.getAttribute("data-title")?.toLowerCase() || "";
            const location = box.getAttribute("data-location")?.toLowerCase() || "";
            const highrise = box.getAttribute("data-highrise")?.toLowerCase() || "";
            const award = box.getAttribute("data-award")?.toLowerCase() || "";

            if (title.includes(query) || 
                location.includes(query) || 
                highrise.includes(query) || 
                award.includes(query)) {
                
                matchingProjects.add(box);
                hasMatch = true;

                if (!displayedTitles.has(title)) {
                    displayedTitles.add(title);
                    const result = createSearchResult(box);
                    searchContent.appendChild(result);
                }

                // Add keyword results
                if (award.includes(query) && !displayedKeywords.has("AWARDED")) {
                    displayedKeywords.add("AWARDED");
                    const awardResult = createSearchResult(null, "AWARDED");
                    searchContent.appendChild(awardResult);
                }
                if (highrise.includes(query) && !displayedKeywords.has("HIGH-RISE")) {
                    displayedKeywords.add("HIGH-RISE");
                    const highriseResult = createSearchResult(null, "HIGH-RISE");
                    searchContent.appendChild(highriseResult);
                }
            }
        });

        // Update visibility in all views
        if (!query) {
            // Show all projects when search is empty
            document.querySelectorAll('.project-box').forEach(box => {
                box.style.display = "";
                box.style.visibility = "visible";
                box.style.position = "relative";
            });

            document.querySelectorAll('.project-globe-marker').forEach(marker => {
                marker.style.display = '';
                marker.style.opacity = '1';
            });
        } else {
            // Update visibility in regular views
            document.querySelectorAll('.project-box').forEach(box => {
                if (matchingProjects.has(box)) {
                    box.style.display = "";
                    box.style.visibility = "visible";
                    box.style.position = "relative";
                } else {
                    box.style.display = "none";
                    box.style.visibility = "hidden";
                    box.style.position = "absolute";
                }
            });

            // Update visibility in location view
            document.querySelectorAll('.project-globe-marker').forEach(marker => {
                const title = marker.getAttribute("data-title")?.toLowerCase() || "";
                const location = marker.getAttribute("data-location")?.toLowerCase() || "";
                const highrise = marker.getAttribute("data-highrise")?.toLowerCase() || "";
                const award = marker.getAttribute("data-award")?.toLowerCase() || "";

                if (title.includes(query) || 
                    location.includes(query) || 
                    highrise.includes(query) || 
                    award.includes(query)) {
                    marker.style.display = '';
                    marker.style.opacity = '1';
                } else {
                    marker.style.display = 'none';
                    marker.style.opacity = '0';
                }
            });
        }

        if (!hasMatch) {
            const noResult = document.createElement("div");
            noResult.classList.add("no-result");
            noResult.textContent = "No projects match your search.";
            searchContent.appendChild(noResult);
        }
    }
    function createSearchResult(box, keyword = null) {
        const result = document.createElement("div");
        result.classList.add("search-result");

        if (keyword) {
            // Display keyword like "AWARDED" or "HIGH-RISE"
            result.textContent = keyword;
            result.addEventListener("click", function() {
                mainSearchInput.value = keyword;
                filterProjectsByKeyword(keyword);
                searchContent.style.display = "block";
                updateSearchResults(keyword.toLowerCase());
            });
        } else if (box) {
            // Display project title
            const title = box.getAttribute("data-title") || "Untitled Project";
            result.textContent = title;
            result.addEventListener("click", function () {
                // Don't clear search input anymore
                const currentSearchValue = mainSearchInput.value; // Store current search value
                
                // Hide search results temporarily while modal is open
                searchContent.style.display = "none";
                
                openProjectModal(box, currentSearchValue); // Pass the current search value
            });
        }

        return result;
    }

    function filterProjectsByKeyword(keyword) {
        const matchingProjects = new Set();
    
        // First pass: Find matching projects
        Object.values(containers).forEach(containerSelector => {
            const container = document.querySelector(containerSelector);
            if (container) {
                container.querySelectorAll(".project-box, .project-globe-marker").forEach(box => {
                    const hasKeyword = keyword === "HIGHRISE" ? 
                        box.getAttribute("data-highrise") === "HIGHRISE" :
                        keyword === "AWARD" ? 
                        box.getAttribute("data-award") === "AWARD" : 
                        false;
    
                    if (hasKeyword) {
                        matchingProjects.add(box);
                    }
                });
            }
        });
    
        // Special handling for globe markers
        const globeContainer = document.getElementById('globe-container');
        if (globeContainer && globeContainer.style.display !== 'none') {
            document.querySelectorAll('.project-globe-marker').forEach(marker => {
                const matchingProject = Array.from(matchingProjects).find(
                    p => p.getAttribute('data-title') === marker.getAttribute('data-title')
                );
                
                if (matchingProject) {
                    marker.style.display = '';
                    marker.style.opacity = '1';
                } else {
                    marker.style.display = 'none';
                    marker.style.opacity = '0';
                }
            });
        }
    
        // Update visibility for regular views
        Object.values(containers).forEach(containerSelector => {
            const container = document.querySelector(containerSelector);
            if (container && container !== globeContainer) {
                let hasVisibleProjects = false;
                
                container.querySelectorAll(".project-box").forEach(box => {
                    if (matchingProjects.has(box)) {
                        box.style.display = "";
                        box.style.visibility = "visible";
                        box.style.position = "relative";
                        hasVisibleProjects = true;
                    } else {
                        box.style.display = "none";
                        box.style.visibility = "hidden";
                        box.style.position = "absolute";
                    }
                });
            }
        });
    }
    function openProjectModal(box) {
        const modal = document.getElementById("projectDetailModal");
        
        // Update modal content
        document.getElementById("projectTitle").textContent = box.getAttribute("data-title") || 'Untitled Project';
        document.getElementById("projectClient").textContent = box.getAttribute("data-client") || 'No Client Specified';
        document.getElementById("projectTypology").textContent = box.getAttribute("data-typology") || 'Unknown Typology';
        document.getElementById("projectLocation").textContent = box.getAttribute("data-location") || 'Unknown Location';
        document.getElementById("projectDate").textContent = box.getAttribute("data-date") || 'No Date Provided';
        
        // Set the main project image
        const projectIcon = document.getElementById("projectIcon");
        const iconURL = box.getAttribute("data-icon") || 'default-icon.png';
        projectIcon.src = iconURL;
        projectIcon.classList.add("symbol-image");
        
        // Project Image in Description
        const hoverImage = box.querySelector('.hover-image');
        const projectImageSection = document.getElementById('projectImage');
        if (hoverImage && projectImageSection) {
            projectImageSection.src = hoverImage.src;
            projectImageSection.style.display = 'block';
        }
        
        // New Page Image
        const newImage = box.getAttribute('data-new-image') || 'default-new-image.png';
        const newPageImage = document.querySelector('.new-page-image');
        if (newPageImage) {
            newPageImage.src = newImage;
            newPageImage.style.display = 'block';
        }
        
        // Update new-page text
        const paragraphs = [
            box.getAttribute('data-paragraph1') || '',
            box.getAttribute('data-paragraph2') || '',
            box.getAttribute('data-paragraph3') || ''
        ];
        const newPageText = document.querySelector('.text-container');
        if (newPageText) {
            newPageText.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
        }
        
        // Update project links with HOME and CLOSE functionality
        const projectLinksContainer = document.querySelector('.project-links');
        if (projectLinksContainer) {
            projectLinksContainer.innerHTML = ''; // Clear existing links
            // Create containers for home link and other links
            const homeLinkContainer = document.createElement('div');
            homeLinkContainer.className = 'home-link';
            const otherLinksContainer = document.createElement('div');
            otherLinksContainer.className = 'other-links';
            const links = [
                { url: "javascript:void(0)", icon: "images.png", action: "close", isHome: true },

                { url: box.getAttribute('data-3dmodel-link'), icon: box.getAttribute('data-3dmodel-icon') || 'default-3dmodel-icon.png' },
                { url: box.getAttribute('data-drawings-link'), icon: box.getAttribute('data-drawings-icon') || 'default-drawings-icon.png' },
                { url: box.getAttribute('data-animation-link'), icon: box.getAttribute('data-animation-icon') || 'default-animation-icon.png' },
                { url: box.getAttribute('data-visuals-link'), icon: box.getAttribute('data-visuals-icon') || 'default-visuals-icon.png' },
                { url: box.getAttribute('data-presentation-link'), icon: box.getAttribute('data-presentation-icon') || 'default-presentation-icon.png' }
            ];
        
     // Create and append links
    links.forEach(({ url, icon, action, isHome }) => {
        if (url || action === "close") {
            const linkElement = document.createElement('a');
            linkElement.href = url || 'javascript:void(0)';
            linkElement.target = action === "close" ? "" : "_blank";

            if (isHome) {
                linkElement.textContent = 'HOME';
                linkElement.onclick = closeProjectDetail;
                linkElement.classList.add('home-link');
                homeLinkContainer.appendChild(linkElement);
            } else {
                if (url) {
                    linkElement.innerHTML = `<img src="${icon}" alt="Link Icon">`;
                    otherLinksContainer.appendChild(linkElement);
                }
            }
        }
    });
            projectLinksContainer.appendChild(homeLinkContainer);
            projectLinksContainer.appendChild(otherLinksContainer);
            projectLinksContainer.style.display = projectLinksContainer.childElementCount > 0 ? 'flex' : 'none';
                }
        
        
        // Update team members
        const teamData = JSON.parse(box.getAttribute("data-team") || '[]');
        const teamSection = document.getElementById("teamMemberNames");
        teamSection.textContent = teamData.length ? teamData.join(', ') : 'No team members available.';
        
        // Load gallery images
        const imageGallery = document.getElementById("imageGallery");
        imageGallery.innerHTML = ''; // Clear previous images
        const images = JSON.parse(box.getAttribute("data-images") || '[]');
        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = "Gallery Image";
            imageGallery.appendChild(img);
        });
        
        // Show the modal
        modal.style.display = "block";
        
        // Close the search modal
        const searchSectionModal = document.getElementById("searchSectionModal");
        if (searchSectionModal) {
            searchSectionModal.style.display = "none";
        }
    }
    
    // Function to update links conditionally
    function updateLink(linkId, linkUrl, iconUrl) {
        const linkElement = document.getElementById(linkId);
        if (linkUrl) {
            linkElement.style.display = "inline-block";
            linkElement.href = linkUrl;
            if (iconUrl) {
                const iconElement = linkElement.querySelector("img");
                if (iconElement) {
                    iconElement.src = iconUrl;
                }
            }
        } else {
            linkElement.style.display = "none";
        }
    }

    const projectDetailModal = document.getElementById("projectDetailModal");
    if (projectDetailModal) {
        // Reset the scroll position to the top
        projectDetailModal.scrollTop = 0;

        // Optionally clear dynamic content if needed
        document.getElementById("teamMemberNames").textContent = "";
        document.getElementById("imageGallery").innerHTML = "";
        document.querySelector('.text-container').innerHTML = "";

        // Hide the modal
        projectDetailModal.style.display = "none";
    } else {
        console.error("Project Detail Modal not found.");
    }

  // Hide the search results and input when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-tab") && !event.target.closest("#searchContent")) {
        mainSearchInput.classList.remove("visible");
        searchContent.style.display = "none";
    }
});
});

document.addEventListener("DOMContentLoaded", function () {
    // Existing elements
    const infoSectionLink = document.getElementById("infoSectionLink");
    const whatWeDoTabLink = document.getElementById("whatWeDoTabLink");
    const onboardingTabLink = document.getElementById("onboardingTabLink");
    const whoWeAreTabLink = document.getElementById("whoWeAreTabLink");
    const knowledgeTabLink = document.getElementById("knowledgeTabLink"); // New Tab Link
    const homeTabLink = document.getElementById("homeTabLink");

    const whatWeDoContent = document.getElementById("whatWeDoContent");
    const onboardingContent = document.getElementById("onboardingContent");
    const whoWeAreContent = document.getElementById("whoWeAreContent");
    const knowledgeContent = document.getElementById("knowledgeContent"); // New Content Section

    const closeInfoModal = document.getElementById("closeInfoSectionModal");
    const infoSectionModal = document.getElementById("infoSectionModal");

    // Main INFO button click handler
    infoSectionLink.addEventListener("click", function (event) {
        event.preventDefault();
        infoSectionModal.style.display = "block";
        whatWeDoContent.style.display = "block";
        whoWeAreContent.style.display = "none";
        onboardingContent.style.display = "none";
        knowledgeContent.style.display = "none"; // Ensure KNOWLEDGE is hidden initially
        whatWeDoTabLink.classList.add("active");
        whoWeAreTabLink.classList.remove("active");
        onboardingTabLink.classList.remove("active");
        knowledgeTabLink.classList.remove("active");
    });

    // Tab switching logic for WHAT WE DO
    whatWeDoTabLink.addEventListener("click", function (event) {
        event.preventDefault();
        whatWeDoContent.style.display = "block";
        whoWeAreContent.style.display = "none";
        onboardingContent.style.display = "none";
        knowledgeContent.style.display = "none";
        whatWeDoTabLink.classList.add("active");
        whoWeAreTabLink.classList.remove("active");
        onboardingTabLink.classList.remove("active");
        knowledgeTabLink.classList.remove("active");
    });

    // Tab switching logic for WHO WE ARE
    whoWeAreTabLink.addEventListener("click", function (event) {
        event.preventDefault();
        whatWeDoContent.style.display = "none";
        whoWeAreContent.style.display = "block";
        onboardingContent.style.display = "none";
        knowledgeContent.style.display = "none";
        whoWeAreTabLink.classList.add("active");
        whatWeDoTabLink.classList.remove("active");
        onboardingTabLink.classList.remove("active");
        knowledgeTabLink.classList.remove("active");
    });

    // Tab switching logic for ONBOARDING
    onboardingTabLink.addEventListener("click", function (event) {
        event.preventDefault();
        whatWeDoContent.style.display = "none";
        whoWeAreContent.style.display = "none";
        onboardingContent.style.display = "block";
        knowledgeContent.style.display = "none";
        onboardingTabLink.classList.add("active");
        whatWeDoTabLink.classList.remove("active");
        whoWeAreTabLink.classList.remove("active");
        knowledgeTabLink.classList.remove("active");
    });

    // Tab switching logic for KNOWLEDGE
    knowledgeTabLink.addEventListener("click", function (event) {
        event.preventDefault();
        whatWeDoContent.style.display = "none";
        whoWeAreContent.style.display = "none";
        onboardingContent.style.display = "none";
        knowledgeContent.style.display = "block";
        knowledgeTabLink.classList.add("active");
        whatWeDoTabLink.classList.remove("active");
        whoWeAreTabLink.classList.remove("active");
        onboardingTabLink.classList.remove("active");
    });

    // Close modal logic
    closeInfoModal.addEventListener("click", function () {
        infoSectionModal.style.display = "none";
    });

    // Home tab logic
    homeTabLink.addEventListener("click", function (event) {
        event.preventDefault();
        infoSectionModal.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    
    // Show preloader initially
    const preloader = document.getElementById("preloader");
    document.body.classList.add("loading"); // Prevent scrolling during load

    // Select all sorting buttons
    const buttons = document.querySelectorAll(".sorting-bar button");

    // Ensure the chronological button is active by default
    const chronologicalButton = document.querySelector(".sorting-bar button:nth-child(1)");
    if (chronologicalButton) {
        setActiveButton(chronologicalButton);
        sortProjects('chronological'); // Initialize with chronological sorting

        // Hide other headers explicitly
        const alphabeticalHeader = document.querySelector('.alphabetical-header');
        const programmaticHeader = document.querySelector('.programmatic-header');
        const scaleHeader = document.querySelector('.scale-header');
        const epochHeader = document.getElementById('epochTimeline');
        const globeContainer = document.getElementById('globe-container');

        if (alphabeticalHeader) alphabeticalHeader.style.display = 'none';
        if (programmaticHeader) programmaticHeader.style.display = 'none';
        if (scaleHeader) scaleHeader.style.display = 'none';
        if (epochHeader) epochHeader.style.display = 'none';
        if (globeContainer) globeContainer.style.display = 'none';
    } else {
        console.error("Chronological button not found.");
    }

    // Add click event listeners to all sorting buttons
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const criteria = this.textContent.toLowerCase(); // Derive criteria from button text
            setActiveButton(this); // Highlight the active button
            sortProjects(criteria); // Sort projects based on the clicked button
        });
    });

    // Automatically hide the preloader and fade in the page
    setTimeout(() => {
        if (preloader) {
            preloader.style.display = "none";
        }
        document.body.classList.add("loaded"); // Trigger fade-in effect
        document.body.classList.remove("loading"); // Allow scrolling after load
    }, 200); // 2 seconds delay
});

document.addEventListener('DOMContentLoaded', function () {
    const programmaticOrder = [
        "Masterplan",
        "Hospitality",
        "Others",
        "Residential",
        "Office",
        "Transportation"
    ];

    const yearColumns = document.querySelectorAll('.year-column');

    function sortAndDistributeProjects() {
        yearColumns.forEach((yearColumn) => {
            const projects = Array.from(yearColumn.querySelectorAll('.project-box'));

            // Sort projects based on programmaticOrder
            projects.sort((a, b) => {
                const tagA = a.getAttribute('data-tags');
                const tagB = b.getAttribute('data-tags');
                return programmaticOrder.indexOf(tagA) - programmaticOrder.indexOf(tagB);
            });

            // Get or create sub-columns
            let subColumns = yearColumn.querySelectorAll('.sub-column');
            if (subColumns.length === 0) {
                for (let i = 0; i < 2; i++) {
                    const subColumn = document.createElement('div');
                    subColumn.className = 'sub-column';
                    yearColumn.appendChild(subColumn);
                }
                subColumns = yearColumn.querySelectorAll('.sub-column');
            }

            // Clear sub-columns
            subColumns.forEach((subColumn) => {
                subColumn.innerHTML = '';
            });

            // Distribute projects evenly between sub-columns
            projects.forEach((project, index) => {
                const targetColumn = index % 2; // Alternate between 0 and 1
                subColumns[targetColumn].appendChild(project);
            });
        });
    }

    // Run sorting and distribution
    sortAndDistributeProjects();
});

document.addEventListener('DOMContentLoaded', () => {
    distributeProjectsAcrossSubcolumns();
    
    // Observe the container for size changes
    const container = document.querySelector('.symbol-grid');
    if (container) {
        resizeObserver.observe(container);
    }
    
    // Handle sorting events
    const sortingButtons = document.querySelectorAll('.sorting-bar button');
    sortingButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(distributeProjectsAcrossSubcolumns, 100);
        });
    });
});

// Add resize observer to handle window size changes
const resizeObserver = new ResizeObserver(() => {
    distributeProjectsAcrossSubcolumns();
});
document.head.appendChild(styleSheet);


document.addEventListener('DOMContentLoaded', function () {
    const programmaticOrder = [
        "Masterplan",
        "Hospitality",
        "Others",
        "Residential",
        "Office",
        "Transportation"
    ];

    const epochHeader = document.getElementById('epochTimeline');
    const epochProjects = document.querySelector('.epoch-projects');

    // Function to sort and distribute projects in the Epoch Tab
    function sortAndDistributeEpochProjects() {
        const epochLabels = epochProjects.querySelectorAll('.epoch-label');

        epochLabels.forEach((epochLabel) => {
            const projects = Array.from(epochLabel.querySelectorAll('.project-box'));

            // Sort projects based on programmatic order
            projects.sort((a, b) => {
                const tagA = a.getAttribute('data-tags');
                const tagB = b.getAttribute('data-tags');
                return programmaticOrder.indexOf(tagA) - programmaticOrder.indexOf(tagB);
            });

            // Get sub-columns or create them
            let subColumns = epochLabel.querySelectorAll('.sub-column');
            if (subColumns.length === 0) {
                for (let i = 0; i < 2; i++) { // Two sub-columns for each epoch
                    const subColumn = document.createElement('div');
                    subColumn.className = 'sub-column';
                    epochLabel.appendChild(subColumn);
                }
                subColumns = epochLabel.querySelectorAll('.sub-column');
            }

            // Clear sub-columns
            subColumns.forEach((subColumn) => {
                subColumn.innerHTML = '';
            });

            // Distribute projects evenly across sub-columns
            projects.forEach((project, index) => {
                const targetColumn = index % subColumns.length;
                subColumns[targetColumn].appendChild(project);
            });
        });
    }

    // Add event listener to trigger sorting when Epoch Tab is active
    document.querySelector('.sorting-bar button:nth-child(4)').addEventListener('click', function () {
        epochHeader.style.display = 'flex'; // Ensure the Epoch Tab is visible
        sortAndDistributeEpochProjects(); // Trigger sorting and distribution
    });

    // Initial sort and distribution when the DOM is loaded
    sortAndDistributeEpochProjects();
});
function sortAndDistributeEpochProjects() {
    const programmaticOrder = [
        "Masterplan",
        "Hospitality",
        "Others",
        "Residential",
        "Office",
        "Transportation"
    ];

    const epochProjects = document.querySelector('.epoch-projects');
    const epochLabels = epochProjects.querySelectorAll('.epoch-label');

    epochLabels.forEach((epochLabel) => {
        const projects = Array.from(epochLabel.querySelectorAll('.project-box'));

        // Sort projects based on programmatic order
        projects.sort((a, b) => {
            const tagA = a.getAttribute('data-tags');
            const tagB = b.getAttribute('data-tags');
            return programmaticOrder.indexOf(tagA) - programmaticOrder.indexOf(tagB);
        });

        // Ensure each epoch label has three sub-columns
        let subColumns = epochLabel.querySelectorAll('.sub-column');
        if (subColumns.length < 3) {
            epochLabel.innerHTML = ''; // Clear existing sub-columns
            for (let i = 0; i < 3; i++) {
                const subColumn = document.createElement('div');
                subColumn.className = 'sub-column';
                epochLabel.appendChild(subColumn);
            }
            subColumns = epochLabel.querySelectorAll('.sub-column');
        }

        // Clear existing content in sub-columns
        subColumns.forEach((subColumn) => {
            subColumn.innerHTML = '';
        });

        // Distribute projects across three sub-columns
        projects.forEach((project, index) => {
            const targetColumn = index % 3; // Cycle through 0, 1, 2
            subColumns[targetColumn].appendChild(project);
        });
    });
}

// Trigger Epoch sorting on Epoch Tab selection
document.querySelector('.sorting-bar button:nth-child(4)').addEventListener('click', function () {
    const epochHeader = document.getElementById('epochTimeline');
    epochHeader.style.display = 'flex'; // Show Epoch Tab
    sortAndDistributeEpochProjects(); // Trigger sorting and distribution
});
function sortAndDistributeAlphabeticalProjects() {
    const alphabeticalHeader = document.querySelector(".alphabetical-header");
    const programmaticOrder = {
        Masterplan: 1,
        Hospitality: 2,
        Others: 3,
        Residential: 4,
        Office: 5,
        Transportation: 6,
    };

    // Define the special group and its characters
    const xyzGroup = {
        label: "XYZ#",
        characters: ["X", "Y", "Z", "#", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    };

    // Clear all existing projects first
    alphabeticalHeader.querySelectorAll(".alphabet-label").forEach((label) => {
        const letter = label.getAttribute("data-letter");
        label.innerHTML = ''; // Clear completely
        
        // Recreate the letter display
        const letterDisplay = document.createElement('div');
        letterDisplay.className = 'letter-display';
        letterDisplay.textContent = letter;
        label.appendChild(letterDisplay);
    });

    // Create a Set to track processed projects
    const processedProjects = new Set();

    // Process each project only once
    document.querySelectorAll(".project-box").forEach((projectBox) => {
        const projectId = projectBox.getAttribute('data-project');
        if (processedProjects.has(projectId)) return;

        const symbolName = projectBox.querySelector(".symbol-name")?.textContent.trim() || "";
        const firstChar = symbolName.charAt(0).toUpperCase();

        // Determine target label
        let targetLabel;
        if (xyzGroup.characters.includes(firstChar)) {
            // If the first character is in the XYZ# group, use the combined label
            targetLabel = alphabeticalHeader.querySelector(`.alphabet-label[data-letter="${xyzGroup.label}"]`);
        } else {
            // Otherwise, use the regular letter label
            targetLabel = alphabeticalHeader.querySelector(`.alphabet-label[data-letter="${firstChar}"]`);
        }

        if (targetLabel) {
            const clonedProject = projectBox.cloneNode(true);
            
            // Reattach hover events
            clonedProject.addEventListener('mouseenter', function(e) {
                const tooltip = document.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.textContent = this.getAttribute('data-title') || 'Untitled Project';
                    tooltip.style.display = "block";
                }
            });

            clonedProject.addEventListener('mousemove', function(e) {
                const tooltip = document.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.style.left = `${e.pageX + 10}px`;
                    tooltip.style.top = `${e.pageY + 10}px`;
                }
            });

            clonedProject.addEventListener('mouseleave', function() {
                const tooltip = document.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.style.display = "none";
                }
            });

            // Add click event
            addClickEventToProjectBox(clonedProject);
            
            // Append to label
            targetLabel.appendChild(clonedProject);
            
            // Mark as processed
            processedProjects.add(projectId);
        }
    });

    // Sort projects within each label by programmatic order
    alphabeticalHeader.querySelectorAll(".alphabet-label").forEach((label) => {
        const projects = Array.from(label.querySelectorAll(".project-box"));
        projects.sort((a, b) => {
            const aTag = a.getAttribute("data-tags");
            const bTag = b.getAttribute("data-tags");
            const aOrder = programmaticOrder[aTag] || Infinity;
            const bOrder = programmaticOrder[bTag] || Infinity;
            return aOrder - bOrder;
        });

        // Clear and reappend in sorted order
        const letterDisplay = label.querySelector('.letter-display');
        label.innerHTML = '';
        label.appendChild(letterDisplay);
        projects.forEach(project => label.appendChild(project));
    });
}

function sortAndDistributeScaleProjects() {
    const programmaticOrder = [
        "Masterplan",
        "Hospitality",
        "Others",
        "Residential",
        "Office",
        "Transportation"
    ]; // Bottom-to-top order

    const scaleProjects = document.querySelector('.scale-projects');
    if (!scaleProjects) return;

    // Create a Set to track processed projects
    const processedProjects = new Set();

    // First, clear ALL existing projects from sub-columns
    scaleProjects.querySelectorAll('.scale-label').forEach((label) => {
        label.querySelectorAll('.sub-column').forEach(subColumn => {
            subColumn.innerHTML = '';
        });
    });

    // Collect projects by their programmatic tags
    const projectGroups = {};
    document.querySelectorAll('.project-box').forEach(projectBox => {
        const projectId = projectBox.getAttribute('data-project');
        
        // Skip if already processed
        if (processedProjects.has(projectId)) return;
        
        const scale = projectBox.getAttribute('data-scale');
        const tag = projectBox.getAttribute('data-tags');
        if (!programmaticOrder.includes(tag)) return;

        if (!projectGroups[scale]) projectGroups[scale] = {};
        if (!projectGroups[scale][tag]) projectGroups[scale][tag] = [];

        projectGroups[scale][tag].push(projectBox);
        processedProjects.add(projectId);
    });

    // Distribute projects across sub-columns
    Object.entries(projectGroups).forEach(([scale, tags]) => {
        const scaleLabel = scaleProjects.querySelector(`.scale-label[data-scale="${scale}"]`);
        if (!scaleLabel) return;

        const subColumns = Array.from(scaleLabel.querySelectorAll('.sub-column'));

        let currentRow = [];
        programmaticOrder.forEach(tag => {
            const projects = tags[tag] || [];
            projects.forEach(project => {
                currentRow.push(project);
                if (currentRow.length === 3) {
                    // Distribute to sub-columns when the row is complete
                    distributeRowToColumns(currentRow, subColumns);
                    currentRow = [];
                }
            });
        });

        // Distribute any remaining projects in the last row
        if (currentRow.length > 0) {
            distributeRowToColumns(currentRow, subColumns);
        }
    });

    // Helper function to distribute a row across columns
    function distributeRowToColumns(row, columns) {
        row.forEach((project, index) => {
            const targetColumn = columns[index % columns.length];
            if (targetColumn) {
                const clonedProject = project.cloneNode(true);
                
                // Re-attach event listeners to cloned project
                addEventListeners(clonedProject);
                
                targetColumn.appendChild(clonedProject);
            }
        });
    }

    // Helper function to add event listeners
    function addEventListeners(projectBox) {
        projectBox.addEventListener('mouseenter', function(e) {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.textContent = this.getAttribute('data-title') || 'Untitled Project';
                tooltip.style.display = "block";
            }
        });

        projectBox.addEventListener('mousemove', function(e) {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.left = `${e.pageX + 10}px`;
                tooltip.style.top = `${e.pageY + 10}px`;
            }
        });

        projectBox.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.display = "none";
            }
        });

        // Add click event if it exists
        if (typeof addClickEventToProjectBox === 'function') {
            addClickEventToProjectBox(projectBox);
        }
    }
}

function attachHoverAndClickEvents(project) {
    project.addEventListener('mouseenter', function(e) {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.textContent = this.getAttribute('data-title') || 'Untitled Project';
            tooltip.style.display = "block";
        }
    });

    project.addEventListener('mousemove', function(e) {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        }
    });

    project.addEventListener('mouseleave', function() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.display = "none";
        }
    });

    addClickEventToProjectBox(project);
}

// Update the scale section of the sortProjects function
function handleScaleSort() {
    const timelineHeader = document.querySelector('.timeline-header');
    const alphabeticalHeader = document.querySelector('.alphabetical-header');
    const programmaticHeader = document.querySelector('.programmatic-header');
    const epochHeader = document.getElementById('epochTimeline');
    const scaleHeader = document.querySelector('.scale-header');
    const globeContainer = document.getElementById('globe-container');
    
    // Hide other views
    timelineHeader.style.display = 'none';
    alphabeticalHeader.style.display = 'none';
    programmaticHeader.style.display = 'none';
    epochHeader.style.display = 'none';
    if (globeContainer) globeContainer.style.display = 'none';

    // Show scale view
    scaleHeader.style.display = 'flex';
    
    // Hide year columns
    document.querySelectorAll('.year-column').forEach(col => col.style.display = 'none');
    
    // Sort and distribute projects
    sortAndDistributeScaleProjects();
}

// Add the scale button event listener
document.addEventListener('DOMContentLoaded', function() {
    const scaleButton = document.querySelector('.sorting-bar button:nth-child(3)');
    if (scaleButton) {
        scaleButton.addEventListener('click', handleScaleSort);
    }
});
