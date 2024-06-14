class Order {
    constructor(id, productType, isUpgrade = false, isMembership = false) {
        this.id = id;
        this.productType = productType;
        this.isUpgrade = isUpgrade;
        this.isMembership = isMembership;
        this.shipmentSlip = [];
        this.emailNotifications = [];
        this.commissionPayments = [];
    }
}

module.exports = Order;
