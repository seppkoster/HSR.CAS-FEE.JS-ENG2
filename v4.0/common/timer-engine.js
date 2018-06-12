const UPDATE_DELAY = 100; // ms
const FOOD_DELIVERY_TIME = 2000; // ms

/**
 * Encapsulates the timing specific facilities.
 *
 * TIP: This class could be extended to a fully functional scheduler which
 * provides events for all animals and their states.
 */
class TimerEngine {
    /**
     * Waits until the food has been delivered and calls the given method
     * when the delivery is done.
     *
     * @param callback Specifies the notification when the
     */
    waitForDelivery() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), FOOD_DELIVERY_TIME);
        });
    }

    /**
     * Waits until an animal is hungry and returns the time the animal must be fed again.
     *
     * @param timeUntilHungry
     * @returns {{awaiter: Promise<any>, deliveryTime: *}}
     */
    waitUntilHungry(timeUntilHungry) {
        let hungryOn = TimerEngine.toMilliSeconds(timeUntilHungry);

        return {
            awaiter: new Promise((resolve, reject) => {
                    setTimeout(() => resolve(), hungryOn + UPDATE_DELAY);
                }),
            deliveryTime: new Date().getTime() + hungryOn
        };
    }

    /**
     * Helper function to convert seconds into milliseconds.
     *
     * @param numSeconds
     * @returns {number}
     */
    static toMilliSeconds(numSeconds) {
        return (numSeconds * 1000);
    }
}

export default TimerEngine;