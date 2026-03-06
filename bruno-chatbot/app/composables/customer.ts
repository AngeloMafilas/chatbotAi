export const useCustomer = () => {
    //Store customer Name
    const customerName = useState("customerName", () => "");
    // Creating the initials, so that they can be displayed in the chat, ~ make it 2 chars long so that it can be displayed
    const hasNameError = computed(() => customerName.value.length < 2);
    // Creating the initials for the chat
    const names = computed(() => customerName.value.split(" "));
    
    // Creating the initials for the chat
    const customerInitials = computed(() => {
        if (names.value.length < 2){
            return customerName.value.substring(0, 2);
        }
        return `${names.value[0]?.[0]}${names.value[1]?.[0]}`;
    });

    return {customerName,hasNameError, customerInitials};
};