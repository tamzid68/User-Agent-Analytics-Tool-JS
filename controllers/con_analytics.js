const express = require('express');
const fs = require('fs');
const path = require('path');

// Function to categorize user agents
const categorizeUserAgent = (userAgent) => {
    if (/Postman/.test(userAgent)) return 'Postman';
    if (/Thunder Client/.test(userAgent)) return 'Thunder Client';
    if (/Mozilla/.test(userAgent) && !/Edge/.test(userAgent)) return 'Chrome Browser';
    if (/Edge/.test(userAgent)) return 'Edge Browser';
    return 'Other';
};

// Function to get user agent analytics
const gerUserAgentAnalytics = (req, res) => {
    const userAgentFilePath = path.join(__dirname, '../userAgent.json');
    const blockedUserFilePath = path.join(__dirname, '../blockedUser.json');

    try {
        // Read userAgent.json
        const userAgentData = fs.existsSync(userAgentFilePath)
            ? JSON.parse(fs.readFileSync(userAgentFilePath, 'utf8'))
            : [];

        // Read blockedUser.json
        const blockedUserData = fs.existsSync(blockedUserFilePath)
            ? JSON.parse(fs.readFileSync(blockedUserFilePath, 'utf8'))
            : [];

        // Initialize analytics object
        const analytics = {
            Postman: 0,
            'Thunder Client': 0,
            'Chrome Browser': 0,
            'Edge Browser': 0,
            Other: 0,
            Blocked: blockedUserData.length,
        };

        // Categorize each user-agent and update the analytics object
        userAgentData.forEach((entry) => {
            const category = categorizeUserAgent(entry.userAgent);
            analytics[category]++;
        });

        // Log the analytics data
        //console.log('Analytics Data:', analytics);

        // Send the analytics data as a JSON response
        res.json(analytics);
    } catch (err) {
        console.error('Error processing user agent data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { gerUserAgentAnalytics };