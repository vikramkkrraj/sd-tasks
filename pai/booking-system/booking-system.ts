interface IBooking {
    book () : string
}

class HotelBooking implements IBooking {
    book(): string {
        return "Hotel booked at Marriott"
    }
}

class FlightBooking implements IBooking {
    book(): string {
        return "Flight booked with Indigo"
    }
}

class TrainBooking implements IBooking {
    book(): string {
        return "Train booked on IRCTC";
    }
}

class BookingFactory {
    static createBooking (type : string) : IBooking {
        switch(type.toLowerCase()) {
            case "hotel" : 
                return new HotelBooking();
            case  'flight' :
                return new FlightBooking();
            case "train" : 
                return new TrainBooking();
            default : 
                throw new Error("Invalid booking type");
        }
    }
}

const type = "flight";
const booking = BookingFactory.createBooking(type);
console.log(booking.book());

const type1 = "train";
const booking1 = BookingFactory.createBooking(type1);
console.log(booking1.book());

const type2 = "hotel";
const booking2 = BookingFactory.createBooking(type2);
console.log(booking2.book());

