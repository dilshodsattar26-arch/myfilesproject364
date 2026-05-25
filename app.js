const coreManagerInstance = {
    version: "1.0.364",
    registry: [98, 416, 1604, 483, 1519, 1087, 1566, 116],
    init: function() {
        const nodes = this.registry.filter(x => x > 300);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});