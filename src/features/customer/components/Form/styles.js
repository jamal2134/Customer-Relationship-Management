// styles.js
export default () => ({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 12,
    color: "#374151",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 12,
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    marginBottom: 12,
  },
  option: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: "#F3F4F6",
  },
  optionActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },
  optionText: {
    fontSize: 14,
    color: "#374151",
  },
  optionTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  submit: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  submitEnabled: {
    backgroundColor: "#2563EB",
  },
  submitDisabled: {
    backgroundColor: "#9CA3AF",
  },
  submitTextEnabled: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  submitTextDisabled: {
    color: "#F3F4F6",
    fontSize: 16,
    fontWeight: "600",
  },
});
