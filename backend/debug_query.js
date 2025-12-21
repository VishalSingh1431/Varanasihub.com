import pool from './config/database.js';

async function queryBusiness() {
    try {
        const result = await pool.query("SELECT * FROM businesses WHERE slug = 'iitmadrascampus'");
        if (result.rows.length > 0) {
            console.log('BUSINESS_DATA_START');
            console.log(JSON.stringify(result.rows[0], null, 2));
            console.log('BUSINESS_DATA_END');
        } else {
            console.log('Business not found');
        }
    } catch (err) {
        console.error(err);
    } finally {
        await pool.end();
    }
}

queryBusiness();
