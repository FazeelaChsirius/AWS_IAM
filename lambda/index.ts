export async function handler() {
    console.log("Lambda execution");
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain"},
        body: "Hello, CDK! You've hit \n"
    };
    
}