public class BuilderPatternExample {

    // Product Class
    static class Computer {

        private String cpu;
        private int ram;
        private int storage;
        private String graphicsCard;

        // Private Constructor
        private Computer(Builder builder) {
            this.cpu = builder.cpu;
            this.ram = builder.ram;
            this.storage = builder.storage;
            this.graphicsCard = builder.graphicsCard;
        }

        // Display Method
        public void display() {
            System.out.println("CPU: " + cpu);
            System.out.println("RAM: " + ram + " GB");
            System.out.println("Storage: " + storage + " GB");
            System.out.println("Graphics Card: " + graphicsCard);
            System.out.println();
        }

        // Static Nested Builder Class
        static class Builder {

            private String cpu;
            private int ram;
            private int storage;
            private String graphicsCard;

            public Builder setCPU(String cpu) {
                this.cpu = cpu;
                return this;
            }

            public Builder setRAM(int ram) {
                this.ram = ram;
                return this;
            }

            public Builder setStorage(int storage) {
                this.storage = storage;
                return this;
            }

            public Builder setGraphicsCard(String graphicsCard) {
                this.graphicsCard = graphicsCard;
                return this;
            }

            // Build Method
            public Computer build() {
                return new Computer(this);
            }
        }
    }

    // Main Method
    public static void main(String[] args) {

        // Gaming Computer
        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel i9")
                .setRAM(32)
                .setStorage(1000)
                .setGraphicsCard("NVIDIA RTX 4080")
                .build();

        // Office Computer
        Computer officePC = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM(16)
                .setStorage(512)
                .setGraphicsCard("Integrated Graphics")
                .build();

        System.out.println("Gaming Computer:");
        gamingPC.display();

        System.out.println("Office Computer:");
        officePC.display();
    }
}