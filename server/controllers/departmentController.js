import Department from "../models/Department.js";


const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find()
    return res.status(200).json({ success: true, departments })
  } catch (error) {
    return res.status(500).json({ success: false, error: "get departments server error" })
  }
}

const addDepartment = async (req, res) => {

  try {
    const { dep_name, description } = req.body;
    console.log('Received data:', { dep_name, description });
    const newDep = new Department({
      dep_name,
      description
    })
    await newDep.save()
    console.log('Department saved:', newDep);
    return res.status(200).json({
      success: true, department: newDep
    })
  } catch (error) {
    return res.status(500).json({ success: false, error: "add department server error" })
  }
}

const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById({ _id: id })
    return res.status(200).json({ success: true, department })
  } catch (error) {
    return res.status(500).json({ success: false, error: "get department server error" })
  }
}

const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { dep_name, description } = req.body;
    const department = await Department.findByIdAndUpdate({ _id: id }, { dep_name, description }, { new: true })
    return res.status(200).json({ success: true, department })
  }
  catch (error) {
    return res.status(500).json({ success: false, error: "edit department server error" })
  }
}

const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByIdAndDelete({ _id: id })
    return res.status(200).json({ success: true, department })
  }
  catch (error) {
    return res.status(500).json({ success: false, error: "delete department server error" })
  }
}

export { addDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment }