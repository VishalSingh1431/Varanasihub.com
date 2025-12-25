import pool from './config/database.js';

async function checkBusiness() {
    try {
        const result = await pool.query("SELECT id, business_name, mobile, email, status FROM businesses WHERE business_name ILIKE '%A Plus Library%'");
        console.log('Results:', JSON.stringify(result.rows, null, 2));
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

checkBusiness();
