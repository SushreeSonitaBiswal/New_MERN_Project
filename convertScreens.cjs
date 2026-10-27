const fs = require('fs');
const path = require('path');

const screens = [
  { file: 'public-landing-page-fixmyarea.html', name: 'LandingPage', route: '/' },
  { file: 'how-it-works-fixmyarea.html', name: 'HowItWorks', route: '/how-it-works' },
  { file: 'explore-complaints-fixmyarea.html', name: 'ExploreComplaints', route: '/explore' },
  { file: 'report-a-complaint-fixmyarea.html', name: 'ReportComplaint', route: '/report' },
  { file: 'complaint-tracking-rating-fixmyarea.html', name: 'ComplaintTracking', route: '/track' },
  { file: 'citizen-dashboard-fixmyarea.html', name: 'CitizenDashboard', route: '/citizen/dashboard' },
  { file: 'my-complaints-fixmyarea.html', name: 'MyComplaints', route: '/citizen/my-complaints' },
  { file: 'notification-center-fixmyarea.html', name: 'NotificationCenter', route: '/notifications' },
  { file: 'staff-operational-workbench-fixmyarea.html', name: 'StaffWorkbench', route: '/staff/workbench' },
  { file: 'completed-work-history-fixmyarea.html', name: 'CompletedWorkHistory', route: '/staff/history' },
  { file: 'admin-complaint-management-fixmyarea.html', name: 'AdminComplaints', route: '/admin/complaints' },
  { file: 'staff-workload-management-fixmyarea.html', name: 'StaffWorkload', route: '/admin/staff' },
  { file: 'category-management-fixmyarea.html', name: 'CategoryManagement', route: '/admin/categories' },
  { file: 'reports-analytics-fixmyarea.html', name: 'ReportsAnalytics', route: '/admin/analytics' },
  { file: 'system-settings-fixmyarea.html', name: 'SystemSettings', route: '/admin/settings' },
  { file: 'login-fixmyarea.html', name: 'Login', route: '/login' },
  { file: 'register-fixmyarea.html', name: 'Register', route: '/register' },
];

const outDir = path.join(__dirname, 'client', 'src', 'pages');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function htmlToJsx(html) {
  let jsx = html;
  
  // Replace attributes
  jsx = jsx.replace(/\bclass=/g, 'className=');
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=');
  jsx = jsx.replace(/\btabindex=/g, 'tabIndex=');
  jsx = jsx.replace(/\bautocomplete=/g, 'autoComplete=');
  jsx = jsx.replace(/\bchecked=""/g, 'defaultChecked={true}');
  jsx = jsx.replace(/\bchecked\b(?!=)/g, 'defaultChecked={true}');
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/stop-color=/g, 'stopColor=');
  jsx = jsx.replace(/stop-opacity=/g, 'stopOpacity=');
  jsx = jsx.replace(/charset=/g, 'charSet=');
  jsx = jsx.replace(/data-[\w-]+="[^"]*"/g, ''); // strip data attributes or keep them
  
  // Self close void tags: input, img, br, hr
  jsx = jsx.replace(/<(input|img|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');
  
  // Convert style strings to JSX style object
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').map(r => r.trim()).filter(Boolean);
    const obj = {};
    for (const r of rules) {
      const idx = r.indexOf(':');
      if (idx !== -1) {
        let key = r.slice(0, idx).trim();
        let val = r.slice(idx + 1).trim();
        key = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        obj[key] = val;
      }
    }
    return `style={${JSON.stringify(obj)}}`;
  });
  
  // Remove HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  return jsx;
}

for (const s of screens) {
  const filePath = path.join(__dirname, 'stitch_screens', s.file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : raw;
  
  bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  const jsxContent = htmlToJsx(bodyContent);
  
  const componentCode = `import React from 'react';

export default function ${s.name}() {
  return (
    <div className="w-full min-h-screen">
      ${jsxContent}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(outDir, `${s.name}.jsx`), componentCode, 'utf8');
  console.log(`Generated page: ${s.name}`);
}
console.log('Done generating all pages!');
