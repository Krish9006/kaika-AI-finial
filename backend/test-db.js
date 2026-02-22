async function main() {
    try {
        console.log("Importing db...");
        const { default: prisma } = await import('./db/db.js');
        console.log("Connecting...");
        await prisma.$connect();
        console.log("Connected successfully!");

        console.log("Creating test user...");
        const email = `test-${Date.now()}@example.com`;
        // Attempt to create user with password
        const user = await prisma.user.create({
            data: {
                name: "Test Script User",
                email: email,
                password: "password123"
            }
        });

        console.log("User created successfully:", user);
        await prisma.$disconnect();
    } catch (e) {
        console.error("Test failed:", e);
        process.exit(1);
    }
}

main();
