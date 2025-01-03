
export const tableJsonData = [
    {
      id: "1",
      customer_name: "Alice Johnson",
      deal_value: 15000,
      status: "Closed Won",
      contact_date: "2024-12-01",
      sales_person: "John Doe",
      priority: "High",
    },
    {
      id: "2",
      customer_name: "Bob Smith",
      deal_value: 30000,
      status: "Closed Lost",
      contact_date: "2024-11-15",
      sales_person: "Jane Roe",
      priority: "Medium",
    },
    {
      id: "3",
      customer_name: "Charlie Lee",
      deal_value: 12000,
      status: "In Progress",
      contact_date: "2024-12-10",
      sales_person: "John Doe",
      priority: "Low",
    },
    {
      id: "4",
      customer_name: "DaidWilliams",
      deal_value: 5000,
      status: "In Progress",
      contact_date: "2024-1205",
      sales_person: "AliceBrown",
      priority: "High",
    },
    {
      id: "5",
      customer_name: "Eve Davis",
      deal_value: 25000,
      status: "Closed Won",
      contact_date: "2024-11-30",
      sales_person: "John Doe",
      priority: "Medium",
    },
    {
      id: "6",
      customer_name: "Frank Miller",
      deal_value: 18000,
      status: "In Progress",
      contact_date: "2024-12-12",
      sales_person: "Jane Roe",
      priority: "Low",
    },
    {
      id: "7",
      customer_name: "Grace Martinez",
      deal_value: 22000,
      status: "Closed Won",
      contact_date: "2024-11-20",
      sales_person: "Alice Brown",
      priority: "High",
    },
    {
      id: "8",
      customer_name: "Hannah Lee",
      deal_value: 8000,
      status: "In Progress",
      contact_date: "2024-12-10",
      sales_person: "John Doe",
      priority: "Low",
    },
    {
      id: "9",
      customer_name: "Ian Clark",
      deal_value: 35000,
      status: "Closed Lost",
      contact_date: "2024-11-25",
      sales_person: "Jane Roe",
      priority: "Medium",
    },
    {
      id: "10",
      customer_name: "Jack Adams",
      deal_value: 22000,
      status: "Closed Won",
      contact_date: "2024-12-05",
      sales_person: "Alice Brown",
      priority: "High",
    }
  ];
  
  
  
  // Helper function to get the label based on priority
  const getPriorityLabel = (priority) => {
      if (priority === "High") return "High Priority";
      if (priority === "Medium") return "Medium Priority";
      if (priority === "Low") return "Low Priority";
      return "All Deals"; // Default label for any other priority
    };
    
    // Reduce function to create an array of unique priorities with count and label
    const reducedData = 
    tableJsonData.reduce((acc, data) => {
      const existingPriority = acc.find((item) => item.value === data.priority);
    
      if (existingPriority) {
        // If the priority already exists, increment the count
        existingPriority.count += 1;
      } else {
        // If the priority doesn't exist, add a new object with count and label
        acc.push({
          value: data.priority,
          count: 1, // Initialize count to 1 for the first occurrence
          label: getPriorityLabel(data.priority), // Generate the label
        });
      }
    
      return acc;
    }, []); // Initialize the accumulator as an empty array
    
    console.log(reducedData);
    
  
  