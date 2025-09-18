const styles = () => {
    return {
        container: {
            flexGrow: 1,
            padding: 20,
            backgroundColor: "#F9FAFB",
            alignItems: "center",
        },
        title: {
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 16,
            textAlign: "center",
            color: "#111827",
        },
        listContent: {
            paddingBottom: 20,
        },
        separator: {
            height: 1,
            backgroundColor: "#E5E7EB",
            marginVertical: 8,
        },
        emptyContainer: {
            flexGrow: 1,
            padding: 20,
            backgroundColor: "#F9FAFB",
            alignItems: "center",
        },
        emptyText: {
            fontSize: 16,
            color: "#6B7280",
            marginBottom: 12,
            textAlign: "center",
        }, card: {
            backgroundColor: "#FFFFFF",
            padding: 16,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        id: {
            fontSize: 12,
            color: "#6B7280",
            marginBottom: 4,
        },
        name: {
            fontSize: 18,
            fontWeight: "600",
            color: "#111827",
            marginBottom: 8,
        },
        details: {
            flexDirection: "row",
            marginBottom: 4,
        },
        label: {
            fontSize: 14,
            fontWeight: "500",
            color: "#374151",
            marginRight: 6,
        },
        value: {
            fontSize: 14,
            color: "#6B7280",
        },
    }
};

export default styles