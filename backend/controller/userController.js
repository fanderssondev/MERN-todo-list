import asyncHandler from 'express-async-handler';

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

export { authUser };

// NOTE video paused @29:43, https://www.youtube.com/watch?v=R4AhvYORZRY
