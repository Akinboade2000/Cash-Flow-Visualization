document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (username && password) {
                // In a real app, you would validate against a server
                alert('Login successful! Redirecting to dashboard...');
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter both username and password');
            }
        });
    }

    // Create Account Form Handling
    const createAccountForm = document.getElementById('createAccountForm');
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('newEmail').value;
            const password = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validation
            if (!fullName || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (password.length < 8) {
                alert('Password must be at least 8 characters');
                return;
            }
            
            // This will be send to a server
            alert('Account created successfully! Please login.');
            window.location.href = 'index.html';
        });
    }

    // Dashboard Tab Navigation
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    if (sidebarLinks.length > 0) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                
                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Show the selected tab content
                document.getElementById(targetId).classList.add('active');
                
                // Update active link in sidebar
                sidebarLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Import Data Section
    const validateDataBtn = document.getElementById('validateDataBtn');
    const processDataBtn = document.getElementById('processDataBtn');
    if (validateDataBtn && processDataBtn) {
        validateDataBtn.addEventListener('click', function() {
            const fileInput = document.getElementById('dataFile');
            if (fileInput.files.length === 0) {
                alert('Please select a file first');
                return;
            }
            
            // Simulate validation
            setTimeout(() => {
                document.getElementById('validationResult').innerHTML = `
                    <p><i class="fas fa-check-circle" style="color: green;"></i> File validated successfully!</p>
                    <p>File name: ${fileInput.files[0].name}</p>
                    <p>File type: ${fileInput.files[0].type || 'Unknown'}</p>
                    <p>File size: ${(fileInput.files[0].size / 1024).toFixed(2)} KB</p>
                `;
                processDataBtn.disabled = false;
            }, 1000);
        });
        
        processDataBtn.addEventListener('click', function() {
            // Simulate processing
            setTimeout(() => {
                alert('Data processed successfully! You can now proceed to other sections.');
            }, 1500);
        });
    }

    // Filter Transaction Section
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const selectedOptions = Array.from(document.getElementById('filterCriteria').selectedOptions)
                .map(option => option.value);
            
            if (selectedOptions.length === 0) {
                alert('Please select at least one filter criteria');
                return;
            }
            
            // Simulate filtering
            setTimeout(() => {
                document.getElementById('filterResult').innerHTML = `
                    <p><i class="fas fa-check-circle" style="color: green;"></i> Filters applied successfully!</p>
                    <p>Selected criteria: ${selectedOptions.join(', ')}</p>
                    <p>Transactions filtered: ${Math.floor(Math.random() * 1000)}</p>
                `;
            }, 1000);
        });
    }

    // Visualization Section
    const generateGraphBtn = document.getElementById('generateGraphBtn');
    const updateVizBtn = document.getElementById('updateVizBtn');
    if (generateGraphBtn && updateVizBtn) {
        // Initialize chart
        const ctx = document.getElementById('dataChart').getContext('2d');
        const dataChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Transaction Volume',
                    data: [65, 59, 80, 81, 56, 55, 40, 72, 88, 94, 102, 120],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        
        generateGraphBtn.addEventListener('click', function() {
            alert('Node-edge graph generation would be implemented here');
        });
        
        updateVizBtn.addEventListener('click', function() {
            // Simulate updating visualization with new data
            const newData = dataChart.data.datasets[0].data.map(value => 
                value + Math.floor(Math.random() * 20 - 10)
            );
            dataChart.data.datasets[0].data = newData;
            dataChart.update();
            alert('Visualization updated with new data');
        });
    }

    // Detect Anomalies Section
    const runAlgorithmBtn = document.getElementById('runAlgorithmBtn');
    const highlightPatternsBtn = document.getElementById('highlightPatternsBtn');
    if (runAlgorithmBtn && highlightPatternsBtn) {
        runAlgorithmBtn.addEventListener('click', function() {
            // Simulate anomaly detection
            // setTimeout(() => {
               // const anomalies = [
                    'Unusually high transaction on July 15th',
                    'Multiple small transactions from same location',
                    'Transaction amount exceeds threshold'
                ];
                
                const patternsList = document.getElementById('patternsList');
                patternsList.innerHTML = anomalies.map(anomaly => 
                    `<p><i class="fas fa-exclamation-circle" style="color: orange;"></i> ${anomaly}</p>`
                ).join('');
                
                highlightPatternsBtn.disabled = false;
            }, 1500);
        });
        
        highlightPatternsBtn.addEventListener('click', function() {
            alert('Patterns would now be highlighted in the visualization');
        });
    }

    // Generate Reports Section
    const createReportBtn = document.getElementById('createReportBtn');
    const exportReportBtn = document.getElementById('exportReportBtn');
    if (createReportBtn && exportReportBtn) {
        createReportBtn.addEventListener('click', function() {
            const reportType = document.getElementById('reportType').value;
            
            // Simulate report generation
            setTimeout(() => {
                document.getElementById('reportPreview').innerHTML = `
                    <h4>${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report Preview</h4>
                    <p>Generated on: ${new Date().toLocaleString()}</p>
                    <p>Report type: ${reportType}</p>
                    <p>Data points included: ${Math.floor(Math.random() * 1000)}</p>
                    <p>Anomalies detected: ${Math.floor(Math.random() * 20)}</p>
                `;
                exportReportBtn.disabled = false;
            }, 1000);
        });
        
        exportReportBtn.addEventListener('click', function() {
            alert('Report would be exported as PDF/CSV based on user selection');
        });
    }
});
