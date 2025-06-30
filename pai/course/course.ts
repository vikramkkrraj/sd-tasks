abstract class CourseSubscription {
    abstract getDescription() : string;
    abstract getCost () : number;
}

class BasicSubscription extends CourseSubscription {
    getDescription(): string {
        return 'Basic Subscription';
    }

    getCost(): number {
        return 499;
    }
}

abstract class SubscriptionDecorator extends CourseSubscription {
    constructor(protected subscription : CourseSubscription) {
        super();
    }
}

class CertificateAddon extends SubscriptionDecorator {
    getDescription(): string {
        return this.subscription.getDescription() + " + Certificate";
    }

    getCost(): number {
        return this.subscription.getCost() + 200;
    }
}

class DoubtSupportAddon extends SubscriptionDecorator {
    getDescription(): string {
        return this.subscription.getDescription() + " + Doubt Support";
    }

    getCost(): number {
        return this.subscription.getCost() + 300;
    }
}

class MentorAccessAddon extends SubscriptionDecorator {
    getDescription(): string {
        return this.subscription.getDescription() + " + Mentor Access";
    }

    getCost(): number {
        return this.subscription.getCost() + 500;
    }
}

let subscription : CourseSubscription = new BasicSubscription();
subscription = new CertificateAddon(subscription);
subscription = new DoubtSupportAddon(subscription);
console.log(subscription.getDescription());
console.log(subscription.getCost());

