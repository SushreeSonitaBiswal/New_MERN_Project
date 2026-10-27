import Category from '../models/categoryModel.js';
import User from '../models/userModel.js';
import Complaint from '../models/complaintModel.js';

export const seedDatabase = async () => {
  try {
    const catCount = await Category.countDocuments();
    if (catCount === 0) {
      console.log('🌱 Seeding initial civic categories...');
      const categories = [
        {
          name: 'Pothole & Road Hazards',
          code: 'ROAD',
          department: 'Public Works - Highway Division',
          defaultPriority: 'high',
          slaHours: 24,
          icon: 'pothole',
          color: '#e11d48',
          description: 'Damaged asphalt, craters, and dangerous roadway depressions.',
        },
        {
          name: 'Streetlight & Electrical',
          code: 'ELEC',
          department: 'Bureau of Street Lighting',
          defaultPriority: 'medium',
          slaHours: 48,
          icon: 'lightbulb',
          color: '#f59e0b',
          description: 'Dark corridors, flickering bulbs, and knocked down utility poles.',
        },
        {
          name: 'Sanitation & Illegal Dumping',
          code: 'SANI',
          department: 'Waste Management & Environment',
          defaultPriority: 'medium',
          slaHours: 36,
          icon: 'delete',
          color: '#0d9488',
          description: 'Uncollected bulk waste, hazardous materials, and overflowing bins.',
        },
        {
          name: 'Water Main & Sewage Leak',
          code: 'WATR',
          department: 'Municipal Water & Sewer Authority',
          defaultPriority: 'critical',
          slaHours: 12,
          icon: 'water_damage',
          color: '#2563eb',
          description: 'Burst pipelines, contaminated runoff, and backflowing drains.',
        },
        {
          name: 'Tree Hazard & Forestry',
          code: 'TREE',
          department: 'Parks & Urban Forestry',
          defaultPriority: 'low',
          slaHours: 72,
          icon: 'park',
          color: '#16a34a',
          description: 'Fallen branches, obstructed street signs, and dead foliage.',
        },
      ];
      await Category.insertMany(categories);
      console.log('✅ Seeded 5 initial categories.');
    }

    // Seed default sample staff user if none exist
    const staffCount = await User.countDocuments({ role: 'staff' });
    if (staffCount === 0) {
      await User.create({
        name: 'Marcus Vance',
        email: 'marcus@fixmyarea.gov',
        password: 'Password123!',
        role: 'staff',
        phone: '(555) 234-5678',
        ward: 'Ward 04 - Oakwood North',
        department: 'Highway Division - Crew #4',
      });
      console.log('✅ Seeded default staff: marcus@fixmyarea.gov (Password: Password123!)');
    }

    // Seed default sample admin if none exist
    const adminCount = await User.countDocuments({ role: 'admin' });
    if (adminCount === 0) {
      await User.create({
        name: 'Director Eleanor Vance',
        email: 'admin@fixmyarea.gov',
        password: 'Password123!',
        role: 'admin',
        phone: '(555) 999-0000',
        ward: 'City Hall - Central Dispatch',
        department: 'Municipal Operations',
      });
      console.log('✅ Seeded default admin: admin@fixmyarea.gov (Password: Password123!)');
    }

    // Seed a couple of demo complaints if database is empty
    const complaintCount = await Complaint.countDocuments();
    if (complaintCount === 0) {
      const roadCat = await Category.findOne({ code: 'ROAD' });
      await Complaint.create([
        {
          ticketId: 'FMA-4829',
          title: 'Deep asphalt depression near pedestrian crosswalk',
          description: 'Hazardous pothole causing wheel damage and forcing vehicles into opposing lane.',
          category: roadCat?._id,
          categoryName: 'Pothole & Road Hazards',
          location: {
            address: 'Corner of Elm St & 5th Avenue',
            ward: 'Ward 04 - Oakwood District',
            landmark: 'Near Central Library entrance',
          },
          status: 'resolved',
          priority: 'high',
          citizenContact: {
            name: 'Sarah Jenkins',
            email: 'sarah.j@example.com',
            phone: '(555) 345-9876',
          },
          citizenRating: {
            score: 5,
            feedback: 'Quick response and clean asphalt patching within 24 hours!',
            ratedAt: new Date(),
          },
          completionEvidence: {
            completionNotes: 'Cleaned, prepped, and asphalt-compacted by Crew #4.',
            completedAt: new Date(),
          },
        },
        {
          ticketId: 'FMA-7104',
          title: 'Damaged storm drain cover open on bike lane',
          description: 'Cast iron grate cracked and partially sunken. High safety hazard for cyclists.',
          category: roadCat?._id,
          categoryName: 'Pothole & Road Hazards',
          location: {
            address: '742 Evergreen Terrace',
            ward: 'Ward 04 - Oakwood District',
          },
          status: 'in-progress',
          priority: 'critical',
          citizenContact: {
            name: 'David Miller',
            email: 'david.m@example.com',
          },
        },
      ]);
      console.log('✅ Seeded demo civic complaints.');
    }
  } catch (error) {
    console.error('Seed notice:', error.message);
  }
};
