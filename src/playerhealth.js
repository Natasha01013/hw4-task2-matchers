export function playerHealth(obj) {
    return obj.sort((a, b) => b.health - a.health);
}