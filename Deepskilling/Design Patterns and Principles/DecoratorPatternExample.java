public class DecoratorPatternExample {

    // Component Interface
    interface Notifier {
        void send(String message);
    }

    // Concrete Component
    static class EmailNotifier implements Notifier {

        @Override
        public void send(String message) {
            System.out.println("Email Notification: " + message);
        }
    }

    // Abstract Decorator
    static abstract class NotifierDecorator implements Notifier {

        protected Notifier notifier;

        public NotifierDecorator(Notifier notifier) {
            this.notifier = notifier;
        }

        @Override
        public void send(String message) {
            notifier.send(message);
        }
    }

    // Concrete Decorator - SMS
    static class SMSNotifierDecorator extends NotifierDecorator {

        public SMSNotifierDecorator(Notifier notifier) {
            super(notifier);
        }

        @Override
        public void send(String message) {
            super.send(message);
            System.out.println("SMS Notification: " + message);
        }
    }

    // Concrete Decorator - Slack
    static class SlackNotifierDecorator extends NotifierDecorator {

        public SlackNotifierDecorator(Notifier notifier) {
            super(notifier);
        }

        @Override
        public void send(String message) {
            super.send(message);
            System.out.println("Slack Notification: " + message);
        }
    }

    // Main Method
    public static void main(String[] args) {

        Notifier notifier = new EmailNotifier();

        // Add SMS functionality
        notifier = new SMSNotifierDecorator(notifier);

        // Add Slack functionality
        notifier = new SlackNotifierDecorator(notifier);

        notifier.send("Server is down!");
    }
}